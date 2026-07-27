import { access, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pages = ["index.html", "menu.html"];
const errors = [];

for (const page of pages) {
  const html = await readFile(join(root, page), "utf8");
  const localReferences = [...html.matchAll(/(?:href|src)="([^"#?]+)"/g)]
    .map((match) => match[1])
    .filter((reference) => !reference.startsWith("http"));

  for (const reference of localReferences) {
    try {
      await access(join(root, reference));
    } catch {
      errors.push(`${page}: no existe ${reference}`);
    }
  }

  if (html.includes("user-scalable=no")) errors.push(`${page}: bloquea el zoom`);
  if (/loremflickr|source\.unsplash/i.test(html)) errors.push(`${page}: depende de una imagen externa inestable`);
}

const pitch = await readFile(join(root, "index.html"), "utf8");
const menu = await readFile(join(root, "menu.html"), "utf8");
const menuLogic = await readFile(join(root, "assets/js/menu.js"), "utf8");

for (const [, reference] of menuLogic.matchAll(/image:\s*"(assets\/images\/[^"]+)"/g)) {
  try {
    await access(join(root, reference));
  } catch {
    errors.push(`menu.js: no existe ${reference}`);
  }
}

for (const [, reference] of menuLogic.matchAll(/video:\s*"(assets\/videos\/[^"]+)"/g)) {
  try {
    await access(join(root, reference));
  } catch {
    errors.push(`menu.js: no existe ${reference}`);
  }
}

if (!pitch.includes('href="menu.html"')) errors.push("La presentación no enlaza al menú.");
if (!menu.includes("Menú impulsado por Dishly")) errors.push("Falta la referencia discreta del footer.");
if (!menu.includes("La información de alérgenos es orientativa")) errors.push("Falta el aviso general de alérgenos.");
if (!menuLogic.includes('availability: "sold"')) errors.push("Falta el estado de plato agotado.");
if (!menuLogic.includes("customAcknowledged")) errors.push("Falta la confirmación para alergias personalizadas.");
if (!menuLogic.includes("taxRate")) errors.push("Falta el impuesto configurable de demostración.");

if (errors.length) {
  console.error(`Verificación fallida (${errors.length}):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log("Dishly: estructura, enlaces locales y reglas críticas verificados.");
}
