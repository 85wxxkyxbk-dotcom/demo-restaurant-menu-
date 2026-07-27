const DEMO_CONFIG = {
  taxRate: 0.0825,
  defaultTable: 12,
  destinationName: "POS / sistema configurado",
};

const ALLERGEN_LABELS = {
  gluten: "gluten",
  milk: "lácteos",
  egg: "huevo",
  fish: "pescado",
  shellfish: "mariscos",
  sesame: "sésamo",
  soy: "soya",
};

const DISHES = [
  {
    id: "branzino",
    name: "Branzino a la parrilla",
    price: 36,
    image: "assets/images/branzino.jpg",
    video: "assets/videos/branzino-loop.mp4",
    category: "principales",
    protein: "fish",
    description: "Hinojo asado, aceituna verde y beurre blanc de limón.",
    ingredients: ["branzino", "hinojo", "aceituna verde", "limón", "mantequilla"],
    allergens: ["fish", "milk"],
    crossContact: ["shellfish"],
    dietary: [],
    spice: 0,
    time: "18–22 min",
    availability: "available",
    chefFavorite: true,
    popular: true,
    pairing: "Albariño seco o agua mineral con limón",
    customizations: [
      {
        id: "finish",
        label: "Preparación",
        type: "single",
        options: [
          { id: "house", label: "Preparación de la casa", price: 0 },
          { id: "no-butter", label: "Sin beurre blanc", price: 0, removesAllergens: ["milk"] },
        ],
      },
      {
        id: "extras",
        label: "Extras",
        type: "multiple",
        options: [
          { id: "vegetables", label: "Vegetales asados", price: 5 },
          { id: "fish", label: "Porción extra de pescado", price: 12, addsAllergens: ["fish"] },
        ],
      },
    ],
  },
  {
    id: "risotto",
    name: "Risotto de langosta",
    price: 47,
    image: "assets/images/risotto-langosta.webp",
    video: "assets/videos/risotto-langosta-loop.mp4",
    category: "principales",
    protein: "shellfish",
    description: "Arroz carnaroli, bisque de langosta, azafrán y parmesano.",
    ingredients: ["arroz carnaroli", "langosta", "bisque", "azafrán", "mantequilla", "parmesano"],
    allergens: ["shellfish", "milk"],
    crossContact: ["fish", "gluten"],
    dietary: [],
    spice: 0,
    time: "24–28 min",
    availability: "last",
    chefFavorite: true,
    popular: true,
    pairing: "Chardonnay con crianza ligera",
    customizations: [
      {
        id: "finish",
        label: "Acabado",
        type: "single",
        options: [
          { id: "house", label: "Preparación de la casa", price: 0 },
          { id: "no-parmesan", label: "Sin parmesano", price: 0 },
        ],
      },
      {
        id: "extras",
        label: "Extras",
        type: "multiple",
        options: [
          { id: "lobster", label: "Extra medallón de langosta", price: 8, addsAllergens: ["shellfish"] },
          { id: "truffle", label: "Trufa de temporada", price: 9 },
        ],
      },
    ],
  },
  {
    id: "tacos",
    name: "Tacos de short rib",
    price: 24,
    image: "assets/images/tacos-short-rib.webp",
    video: "assets/videos/tacos-short-rib-loop.mp4",
    category: "principales",
    protein: "beef",
    description: "Tres tortillas de maíz, short rib glaseado, cebolla encurtida y crema.",
    ingredients: ["short rib", "tortilla de maíz", "cebolla encurtida", "crema", "chile"],
    allergens: ["milk"],
    crossContact: ["gluten"],
    dietary: [],
    spice: 2,
    time: "14–18 min",
    availability: "available",
    chefFavorite: false,
    popular: true,
    pairing: "Lager clara o limonada de hierbabuena",
    customizations: [
      {
        id: "heat",
        label: "Picante",
        type: "single",
        options: [
          { id: "mild", label: "Suave", price: 0 },
          { id: "house", label: "Picante de la casa", price: 0 },
          { id: "hot", label: "Picante alto", price: 0 },
        ],
      },
      {
        id: "changes",
        label: "Cambios",
        type: "multiple",
        options: [
          { id: "no-crema", label: "Sin crema", price: 0, removesAllergens: ["milk"] },
          { id: "avocado", label: "Agregar aguacate", price: 3 },
        ],
      },
    ],
  },
  {
    id: "burrata",
    name: "Burrata de temporada",
    price: 19,
    image: "assets/images/burrata.webp",
    video: "assets/videos/burrata-temporada-loop.mp4",
    category: "entradas",
    protein: "vegetarian",
    description: "Tomates asados, melocotón, albahaca, aceite de oliva y pan tostado.",
    ingredients: ["burrata", "tomate", "melocotón", "albahaca", "pan"],
    allergens: ["milk", "gluten"],
    crossContact: [],
    dietary: ["vegetarian"],
    spice: 0,
    time: "8–10 min",
    availability: "available",
    chefFavorite: true,
    popular: false,
    pairing: "Rosado provenzal",
    customizations: [
      {
        id: "changes",
        label: "Cambios",
        type: "multiple",
        options: [
          { id: "no-bread", label: "Sin pan tostado", price: 0, removesAllergens: ["gluten"] },
          { id: "bread", label: "Pan tostado extra", price: 3, addsAllergens: ["gluten"] },
        ],
      },
    ],
  },
  {
    id: "pasta",
    name: "Pasta fresca trufada",
    price: 31,
    image: "assets/images/pasta-trufada.webp",
    video: "assets/videos/pasta-trufada-loop.mp4",
    category: "principales",
    protein: "vegetarian",
    description: "Tagliatelle, crema de setas, parmesano y trufa negra.",
    ingredients: ["pasta fresca", "setas", "crema", "parmesano", "trufa"],
    allergens: ["gluten", "milk", "egg"],
    crossContact: [],
    dietary: ["vegetarian"],
    spice: 0,
    time: "16–20 min",
    availability: "available",
    chefFavorite: false,
    popular: true,
    pairing: "Pinot noir de cuerpo ligero",
    customizations: [
      {
        id: "extras",
        label: "Extras",
        type: "multiple",
        options: [
          { id: "truffle", label: "Trufa adicional", price: 7 },
          { id: "mushrooms", label: "Setas salteadas", price: 4 },
        ],
      },
    ],
  },
  {
    id: "salmon",
    name: "Salmón con miso",
    price: 34,
    image: "assets/images/salmon-miso.webp",
    video: "assets/videos/salmon-miso-loop.mp4",
    category: "principales",
    protein: "fish",
    description: "Salmón glaseado, arroz jazmín, pak choi y sésamo.",
    ingredients: ["salmón", "miso", "arroz jazmín", "pak choi", "sésamo"],
    allergens: ["fish", "soy", "sesame"],
    crossContact: ["shellfish", "gluten"],
    dietary: [],
    spice: 1,
    time: "18–22 min",
    availability: "available",
    chefFavorite: false,
    popular: true,
    pairing: "Riesling seco",
    customizations: [
      {
        id: "rice",
        label: "Acompañamiento",
        type: "single",
        options: [
          { id: "jasmine", label: "Arroz jazmín", price: 0 },
          { id: "vegetables", label: "Vegetales al vapor", price: 2 },
        ],
      },
    ],
  },
  {
    id: "bowl",
    name: "Bowl mediterráneo",
    price: 22,
    image: "assets/images/bowl-mediterraneo.webp",
    video: "assets/videos/bowl-mediterraneo-loop.mp4",
    category: "vegetariano",
    protein: "vegetarian",
    description: "Falafel, hummus, tabulé de quinoa, pepino y tahini de hierbas.",
    ingredients: ["falafel", "garbanzo", "quinoa", "pepino", "tahini"],
    allergens: ["sesame"],
    crossContact: ["gluten"],
    dietary: ["vegetarian"],
    spice: 1,
    time: "12–15 min",
    availability: "available",
    chefFavorite: false,
    popular: false,
    pairing: "Té frío de hibisco",
    customizations: [
      {
        id: "extras",
        label: "Extras",
        type: "multiple",
        options: [
          { id: "feta", label: "Queso feta", price: 3, addsAllergens: ["milk"] },
          { id: "falafel", label: "Falafel extra", price: 4 },
        ],
      },
    ],
  },
  {
    id: "gazpacho",
    name: "Gazpacho de tomates",
    price: 15,
    image: "assets/images/gazpacho.webp",
    video: "assets/videos/gazpacho-loop.mp4",
    category: "entradas",
    protein: "vegetarian",
    description: "Tomates maduros, pimiento, pepino, aceite de oliva y crutones.",
    ingredients: ["tomate", "pimiento", "pepino", "aceite de oliva", "crutones"],
    allergens: ["gluten"],
    crossContact: ["milk"],
    dietary: ["vegetarian"],
    spice: 0,
    time: "6–8 min",
    availability: "available",
    chefFavorite: false,
    popular: false,
    pairing: "Fino seco o agua con gas",
    customizations: [
      {
        id: "changes",
        label: "Cambios",
        type: "multiple",
        options: [
          { id: "no-croutons", label: "Sin crutones", price: 0, removesAllergens: ["gluten"] },
          { id: "avocado", label: "Aguacate", price: 3 },
        ],
      },
    ],
  },
  {
    id: "ribeye",
    name: "Ribeye al carbón",
    price: 46,
    image: "assets/images/ribeye.webp",
    video: "assets/videos/ribeye-carbon-loop.mp4",
    category: "principales",
    protein: "beef",
    description: "Corte de 12 oz, papas confitadas, mantequilla de romero y jugo de carne.",
    ingredients: ["ribeye", "papa", "romero", "mantequilla", "jugo de carne"],
    allergens: ["milk"],
    crossContact: ["gluten"],
    dietary: [],
    spice: 0,
    time: "24–30 min",
    availability: "sold",
    chefFavorite: true,
    popular: true,
    pairing: "Cabernet sauvignon",
    customizations: [
      {
        id: "temperature",
        label: "Término",
        type: "single",
        options: [
          { id: "medium-rare", label: "Medio rojo", price: 0 },
          { id: "medium", label: "Medio", price: 0 },
          { id: "well", label: "Bien cocido", price: 0 },
        ],
      },
    ],
  },
  {
    id: "tres-leches",
    name: "Tres leches de coco",
    price: 13,
    image: "assets/images/tres-leches.webp",
    video: "assets/videos/tres-leches-coco-loop.mp4",
    category: "postres",
    protein: "vegetarian",
    description: "Bizcocho de coco, crema ligera, mango y lima.",
    ingredients: ["harina", "huevo", "leche", "coco", "mango", "lima"],
    allergens: ["gluten", "milk", "egg"],
    crossContact: [],
    dietary: ["vegetarian"],
    spice: 0,
    time: "5–7 min",
    availability: "last",
    chefFavorite: false,
    popular: true,
    pairing: "Café espresso o ron añejo",
    customizations: [
      {
        id: "extras",
        label: "Extras",
        type: "multiple",
        options: [
          { id: "mango", label: "Mango adicional", price: 2 },
          { id: "ice-cream", label: "Helado de vainilla", price: 4, addsAllergens: ["milk", "egg"] },
        ],
      },
    ],
  },
];

const STORAGE_KEY = "dishly-demo-cart-v3";
const TABLE_KEY = "dishly-demo-table-v3";
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let dishVideoObserver = null;
const state = {
  category: "all",
  cart: loadCart(),
  table: Number(localStorage.getItem(TABLE_KEY)) || DEMO_CONFIG.defaultTable,
  activeDish: null,
  editingLineId: null,
  modalQuantity: 1,
  recommenderStep: 0,
  recommendation: {
    style: null,
    protein: null,
    budget: null,
    spice: null,
    allergies: [],
    customAllergy: "",
    customAcknowledged: false,
  },
  transferStep: 0,
  lastFocused: null,
};

const refs = {
  dishGrid: document.querySelector("#dishGrid"),
  emptyState: document.querySelector("#emptyState"),
  cartCount: document.querySelector("#cartCount"),
  cartTrigger: document.querySelector("#cartTrigger"),
  cartLayer: document.querySelector("#cartLayer"),
  cartBody: document.querySelector("#cartBody"),
  cartFooter: document.querySelector("#cartFooter"),
  dishModal: document.querySelector("#dishModal"),
  dishModalContent: document.querySelector("#dishModalContent"),
  recommenderModal: document.querySelector("#recommenderModal"),
  recommenderContent: document.querySelector("#recommenderContent"),
  transferModal: document.querySelector("#transferModal"),
  transferContent: document.querySelector("#transferContent"),
  toast: document.querySelector("#toast"),
};

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function money(value) {
  return new Intl.NumberFormat("es-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);
}

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
}

function getDish(id) {
  return DISHES.find((dish) => dish.id === id);
}

function availabilityLabel(value) {
  if (value === "last") return "Últimas unidades";
  if (value === "sold") return "Agotado";
  return "Disponible";
}

function spiceLabel(level) {
  if (level === 0) return "Sin picante";
  if (level === 1) return "Picante suave";
  if (level === 2) return "Picante medio";
  return "Picante alto";
}

function formatAllergens(allergens) {
  if (!allergens.length) return "Sin alérgenos declarados";
  return allergens.map((item) => ALLERGEN_LABELS[item] || item).join(", ");
}

function renderDishes() {
  const filtered = DISHES.filter((dish) => {
    if (state.category === "all") return true;
    if (state.category === "chef") return dish.chefFavorite;
    if (state.category === "popular") return dish.popular;
    if (state.category === "vegetariano") return dish.dietary.includes("vegetarian");
    return dish.category === state.category;
  });

  refs.dishGrid.innerHTML = filtered.map((dish) => {
    const labels = [];
    if (dish.chefFavorite) labels.push('<span class="meta-accent">Favorito del chef</span>');
    if (dish.popular) labels.push("<span>Más pedido</span>");
    if (dish.dietary.includes("vegetarian")) labels.push("<span>Vegetariano</span>");
    labels.push(`<span>${escapeHtml(spiceLabel(dish.spice))}</span>`);

    return `
      <article class="dish-card">
        <button class="dish-image-button" type="button" data-dish-id="${dish.id}" aria-label="Ver ${escapeHtml(dish.name)}">
          <img class="dish-card-poster" src="${dish.image}" alt="${escapeHtml(dish.name)}" width="800" height="600" loading="lazy">
          ${dish.video ? `
            <video class="dish-card-video" muted loop playsinline preload="metadata" poster="${dish.image}" data-dish-video aria-hidden="true">
              <source src="${dish.video}" type="video/mp4">
            </video>
          ` : ""}
          <span class="dish-status ${dish.availability}">${availabilityLabel(dish.availability)}</span>
        </button>
        ${dish.video ? `<button class="video-toggle" type="button" data-video-toggle="${dish.id}" aria-label="Reproducir video de ${escapeHtml(dish.name)}">Reproducir</button>` : ""}
        <div class="dish-card-body">
          <div class="dish-card-heading">
            <h3>${escapeHtml(dish.name)}</h3>
            <span class="dish-price">${money(dish.price)}</span>
          </div>
          <p class="dish-card-description">${escapeHtml(dish.description)}</p>
          <div class="dish-meta">${labels.join("")}</div>
          <div class="dish-card-actions">
            <button class="details-button" type="button" data-dish-id="${dish.id}">Ver detalles</button>
            <button class="add-button" type="button" data-dish-id="${dish.id}" ${dish.availability === "sold" ? "disabled" : ""} aria-label="${dish.availability === "sold" ? `${dish.name} agotado` : `Agregar ${dish.name}`}">+</button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  refs.emptyState.hidden = filtered.length > 0;
  attachImageFallbacks(refs.dishGrid);
  attachVideoPlayback(refs.dishGrid);
}

function attachImageFallbacks(container) {
  container.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      image.src = "assets/images/hero-casa-marea.webp";
      image.alt = "Imagen gastronómica de Casa Marea";
    }, { once: true });
  });
}

function setVideoToggle(video, playing) {
  const toggle = video.closest(".dish-card")?.querySelector("[data-video-toggle]");
  if (!toggle) return;
  const dish = getDish(toggle.dataset.videoToggle);
  toggle.textContent = playing ? "Pausar" : "Reproducir";
  toggle.setAttribute("aria-label", `${playing ? "Pausar" : "Reproducir"} video de ${dish?.name || "plato"}`);
}

function playDishVideo(video) {
  video.play()
    .then(() => setVideoToggle(video, true))
    .catch(() => setVideoToggle(video, false));
}

function attachVideoPlayback(container) {
  dishVideoObserver?.disconnect();
  const videos = [...container.querySelectorAll("[data-dish-video]")];
  videos.forEach((video) => {
    video.addEventListener("error", () => {
      video.hidden = true;
      setVideoToggle(video, false);
    }, { once: true });
    video.addEventListener("pause", () => setVideoToggle(video, false));
    video.addEventListener("play", () => setVideoToggle(video, true));
  });

  if (reducedMotion || !videos.length) return;
  dishVideoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.55) playDishVideo(entry.target);
      else entry.target.pause();
    });
  }, { threshold: [0, 0.55] });
  videos.forEach((video) => dishVideoObserver.observe(video));
}

function setCategory(category) {
  state.category = category;
  document.querySelectorAll("#categoryNav button").forEach((button) => {
    const active = button.dataset.category === category;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderDishes();
  document.querySelector("#menu").scrollIntoView({ behavior: "smooth", block: "start" });
}

function openLayer(layer, focusSelector = ".icon-close") {
  state.lastFocused = document.activeElement;
  layer.hidden = false;
  document.body.classList.add("is-locked");
  window.setTimeout(() => layer.querySelector(focusSelector)?.focus(), 0);
}

function closeLayer(layer) {
  layer.hidden = true;
  const anotherOpen = [refs.cartLayer, refs.dishModal, refs.recommenderModal, refs.transferModal]
    .some((item) => !item.hidden);
  document.body.classList.toggle("is-locked", anotherOpen);
  if (!anotherOpen && state.lastFocused instanceof HTMLElement) state.lastFocused.focus();
}

function selectedOptionIds(line, groupId) {
  return line?.selections.filter((selection) => selection.groupId === groupId).map((selection) => selection.optionId) || [];
}

function openDish(dishId, lineId = null) {
  const dish = getDish(dishId);
  if (!dish) return;
  const line = lineId ? state.cart.find((item) => item.lineId === lineId) : null;
  state.activeDish = dishId;
  state.editingLineId = lineId;
  state.modalQuantity = line?.quantity || 1;

  const customizationHtml = dish.customizations.map((group) => {
    const selectedIds = selectedOptionIds(line, group.id);
    const defaults = group.type === "single" && selectedIds.length === 0 ? [group.options[0].id] : selectedIds;
    return `
      <fieldset class="customization-group" data-group-id="${group.id}" data-group-type="${group.type}">
        <legend>${escapeHtml(group.label)}${group.type === "single" ? " · elige una" : ""}</legend>
        ${group.options.map((option) => `
          <div class="option-row">
            <label>
              <input
                type="${group.type === "single" ? "radio" : "checkbox"}"
                name="custom-${group.id}"
                value="${option.id}"
                ${defaults.includes(option.id) ? "checked" : ""}
              >
              <span>${escapeHtml(option.label)}</span>
            </label>
            <small>${option.price ? `+${money(option.price)}` : "Incluido"}</small>
          </div>
        `).join("")}
      </fieldset>
    `;
  }).join("");

  refs.dishModalContent.innerHTML = `
    <div class="dish-modal-grid ${dish.video ? "has-video" : ""}">
      <div class="dish-modal-media">
        ${dish.video ? `
          <video controls muted loop playsinline preload="metadata" poster="${dish.image}" ${reducedMotion ? "" : "autoplay"} aria-label="Video de ${escapeHtml(dish.name)}">
            <source src="${dish.video}" type="video/mp4">
          </video>
        ` : `<img src="${dish.image}" alt="${escapeHtml(dish.name)}" width="800" height="1000">`}
      </div>
      <div class="dish-modal-info">
        <p class="eyebrow">${availabilityLabel(dish.availability)} · ${escapeHtml(dish.time)}</p>
        <h2 id="dishModalTitle">${escapeHtml(dish.name)}</h2>
        <p class="modal-price">${money(dish.price)}</p>
        <p class="modal-description">${escapeHtml(dish.description)}</p>
        <div class="ingredient-block">
          <h3>Ingredientes principales</h3>
          <p>${dish.ingredients.map(escapeHtml).join(", ")}.</p>
        </div>
        <div class="allergen-block">
          <h3>Alérgenos declarados</h3>
          <p><strong>Contiene:</strong> ${escapeHtml(formatAllergens(dish.allergens))}.</p>
          <p><strong>Posible contacto cruzado:</strong> ${escapeHtml(formatAllergens(dish.crossContact))}.</p>
        </div>
        <form id="dishForm">
          <div class="customizations">${customizationHtml}</div>
          <label class="notes-field">
            <span>Notas para cocina</span>
            <textarea id="dishNotes" maxlength="180" placeholder="Ej. salsa aparte">${escapeHtml(line?.notes || "")}</textarea>
          </label>
          <div class="modal-actions">
            <div class="quantity-control" aria-label="Cantidad">
              <button type="button" data-modal-quantity="-1" aria-label="Reducir cantidad">−</button>
              <output id="modalQuantity">${state.modalQuantity}</output>
              <button type="button" data-modal-quantity="1" aria-label="Aumentar cantidad">+</button>
            </div>
            <button class="button button-dark" type="submit" ${dish.availability === "sold" ? "disabled" : ""}>
              ${line ? "Guardar cambios" : dish.availability === "sold" ? "Plato agotado" : `Agregar · ${money(dish.price)}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  `;

  attachImageFallbacks(refs.dishModalContent);
  openLayer(refs.dishModal);
  updateModalPrice();
}

function getModalSelections() {
  const dish = getDish(state.activeDish);
  if (!dish) return [];
  const selections = [];
  dish.customizations.forEach((group) => {
    const checked = refs.dishModalContent.querySelectorAll(`[data-group-id="${group.id}"] input:checked`);
    checked.forEach((input) => {
      const option = group.options.find((item) => item.id === input.value);
      if (option) {
        selections.push({
          groupId: group.id,
          groupLabel: group.label,
          optionId: option.id,
          label: option.label,
          price: option.price || 0,
          addsAllergens: option.addsAllergens || [],
          removesAllergens: option.removesAllergens || [],
        });
      }
    });
  });
  return selections;
}

function updateModalPrice() {
  const dish = getDish(state.activeDish);
  const submit = refs.dishModalContent.querySelector('#dishForm button[type="submit"]');
  if (!dish || !submit || dish.availability === "sold") return;
  const extras = getModalSelections().reduce((sum, option) => sum + option.price, 0);
  const total = (dish.price + extras) * state.modalQuantity;
  submit.textContent = state.editingLineId ? `Guardar cambios · ${money(total)}` : `Agregar · ${money(total)}`;
}

function saveDishFromModal() {
  const dish = getDish(state.activeDish);
  if (!dish || dish.availability === "sold") return;
  const line = {
    lineId: state.editingLineId || (crypto.randomUUID?.() || `${Date.now()}-${Math.random()}`),
    dishId: dish.id,
    quantity: state.modalQuantity,
    selections: getModalSelections(),
    notes: refs.dishModalContent.querySelector("#dishNotes")?.value.trim() || "",
  };

  if (state.editingLineId) {
    state.cart = state.cart.map((item) => item.lineId === state.editingLineId ? line : item);
  } else {
    state.cart.push(line);
  }
  saveCart();
  renderCart();
  closeLayer(refs.dishModal);
  showToast(state.editingLineId ? "Cambios guardados en el pedido." : `${dish.name} se agregó al pedido.`);
}

function lineUnitPrice(line) {
  const dish = getDish(line.dishId);
  return (dish?.price || 0) + line.selections.reduce((sum, option) => sum + option.price, 0);
}

function cartTotals() {
  const subtotal = state.cart.reduce((sum, line) => sum + lineUnitPrice(line) * line.quantity, 0);
  const tax = subtotal * DEMO_CONFIG.taxRate;
  return { subtotal, tax, total: subtotal + tax };
}

function renderCart() {
  const itemCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  refs.cartCount.textContent = itemCount;
  refs.cartTrigger.setAttribute("aria-label", `Abrir carrito, ${itemCount} ${itemCount === 1 ? "artículo" : "artículos"}`);

  if (!state.cart.length) {
    refs.cartBody.innerHTML = `
      <div class="empty-cart">
        <strong>Tu pedido está vacío</strong>
        <p>Explora la carta y personaliza tus platos favoritos.</p>
        <button class="button button-outline" type="button" data-close-cart data-scroll-menu>Ver menú</button>
      </div>
    `;
    refs.cartFooter.innerHTML = "";
    return;
  }

  refs.cartBody.innerHTML = state.cart.map((line) => {
    const dish = getDish(line.dishId);
    const extras = line.selections.filter((option) => option.price > 0);
    const included = line.selections.filter((option) => option.price === 0);
    return `
      <article class="cart-item">
        <div class="cart-item-heading">
          <h3>${escapeHtml(dish.name)}</h3>
          <strong>${money(lineUnitPrice(line) * line.quantity)}</strong>
        </div>
        <div class="cart-item-details">
          <span>Precio base: ${money(dish.price)} c/u</span>
          ${extras.map((option) => `<span>${escapeHtml(option.label)} +${money(option.price)} c/u</span>`).join("")}
          ${included.map((option) => `<span>${escapeHtml(option.label)} · incluido</span>`).join("")}
          ${line.notes ? `<span><strong>Nota:</strong> ${escapeHtml(line.notes)}</span>` : ""}
        </div>
        <div class="cart-item-actions">
          <div class="mini-quantity" aria-label="Cantidad de ${escapeHtml(dish.name)}">
            <button type="button" data-cart-quantity="-1" data-line-id="${line.lineId}" aria-label="Reducir cantidad">−</button>
            <span>${line.quantity}</span>
            <button type="button" data-cart-quantity="1" data-line-id="${line.lineId}" aria-label="Aumentar cantidad">+</button>
          </div>
          <div class="link-actions">
            <button type="button" data-edit-line="${line.lineId}">Editar</button>
            <button class="remove" type="button" data-remove-line="${line.lineId}">Eliminar</button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  const { subtotal, tax, total } = cartTotals();
  refs.cartFooter.innerHTML = `
    <div class="table-select">
      <label for="tableNumber">Mesa de demostración</label>
      <select id="tableNumber">
        ${Array.from({ length: 20 }, (_, index) => index + 1).map((number) => `
          <option value="${number}" ${number === state.table ? "selected" : ""}>Mesa ${number}</option>
        `).join("")}
      </select>
    </div>
    <dl class="totals">
      <div><dt>Subtotal</dt><dd>${money(subtotal)}</dd></div>
      <div><dt>Impuesto estimado (${(DEMO_CONFIG.taxRate * 100).toFixed(2)}%)</dt><dd>${money(tax)}</dd></div>
      <div class="grand-total"><dt>Total estimado</dt><dd>${money(total)}</dd></div>
    </dl>
    <p class="cart-disclaimer">Mesa e impuestos son datos de demostración. El total final dependería del sistema real del restaurante.</p>
    <button class="button button-dark" type="button" data-start-transfer>Continuar</button>
  `;
}

function updateCartQuantity(lineId, delta) {
  const line = state.cart.find((item) => item.lineId === lineId);
  if (!line) return;
  line.quantity += delta;
  if (line.quantity <= 0) state.cart = state.cart.filter((item) => item.lineId !== lineId);
  saveCart();
  renderCart();
}

function removeCartLine(lineId) {
  state.cart = state.cart.filter((item) => item.lineId !== lineId);
  saveCart();
  renderCart();
  showToast("Plato eliminado del pedido.");
}

const RECOMMENDER_STEPS = [
  {
    key: "style",
    title: "¿Algo conocido o algo diferente?",
    options: [
      ["familiar", "Algo conocido"],
      ["different", "Quiero probar algo diferente"],
      ["any", "Sin preferencia"],
    ],
  },
  {
    key: "protein",
    title: "¿Qué te apetece hoy?",
    options: [
      ["fish", "Pescado"],
      ["shellfish", "Mariscos"],
      ["beef", "Carne"],
      ["vegetarian", "Vegetariano"],
      ["any", "Sin preferencia de proteína"],
    ],
  },
  {
    key: "budget",
    title: "¿Qué presupuesto aproximado prefieres?",
    options: [
      ["25", "Hasta $25"],
      ["40", "Hasta $40"],
      ["any", "Sin límite definido"],
    ],
  },
  {
    key: "spice",
    title: "¿Qué nivel de picante buscas?",
    options: [
      ["none", "Sin picante"],
      ["medium", "Picante medio"],
      ["high", "Picante alto"],
      ["any", "Cualquier nivel"],
    ],
  },
];

function resetRecommender() {
  state.recommenderStep = 0;
  state.recommendation = {
    style: null,
    protein: null,
    budget: null,
    spice: null,
    allergies: [],
    customAllergy: "",
    customAcknowledged: false,
  };
}

function openRecommender() {
  resetRecommender();
  renderRecommender();
  openLayer(refs.recommenderModal);
}

function renderRecommender() {
  if (state.recommenderStep < RECOMMENDER_STEPS.length) {
    renderPreferenceQuestion();
    return;
  }
  if (state.recommenderStep === RECOMMENDER_STEPS.length) {
    renderAllergyQuestion();
    return;
  }
  renderRecommendationResult();
}

function renderPreferenceQuestion() {
  const question = RECOMMENDER_STEPS[state.recommenderStep];
  const current = state.recommendation[question.key];
  const progress = ((state.recommenderStep + 1) / (RECOMMENDER_STEPS.length + 1)) * 100;
  refs.recommenderContent.innerHTML = `
    <p class="eyebrow">Asistente de elección · paso ${state.recommenderStep + 1} de ${RECOMMENDER_STEPS.length + 1}</p>
    <h2 id="recommenderTitle">Encuentra tu plato</h2>
    <p class="recommender-intro">Una recomendación inteligente basada en tus preferencias. No utiliza un agente de IA real.</p>
    <div class="progress-track" aria-hidden="true"><span style="width:${progress}%"></span></div>
    <h3 class="question-label">${escapeHtml(question.title)}</h3>
    <div class="choice-grid">
      ${question.options.map(([value, label]) => `
        <button class="${current === value ? "is-selected" : ""}" type="button" data-answer-key="${question.key}" data-answer-value="${value}" aria-pressed="${current === value}">
          ${escapeHtml(label)}
        </button>
      `).join("")}
    </div>
    <div class="question-actions">
      ${state.recommenderStep > 0 ? '<button class="button button-outline" type="button" data-recommender-back>Atrás</button>' : "<span></span>"}
      <div>
        <button class="text-button" type="button" data-recommender-skip>Saltar</button>
        <button class="button button-dark" type="button" data-recommender-next ${current ? "" : "disabled"}>Continuar</button>
      </div>
    </div>
  `;
}

function renderAllergyQuestion() {
  const progress = 100;
  const selected = state.recommendation.allergies;
  refs.recommenderContent.innerHTML = `
    <p class="eyebrow">Asistente de elección · paso 5 de 5</p>
    <h2 id="recommenderTitle">Alergias y restricciones</h2>
    <p class="recommender-intro">Filtraremos alérgenos declarados y posibles contactos cruzados conocidos.</p>
    <div class="progress-track" aria-hidden="true"><span style="width:${progress}%"></span></div>
    <h3 class="question-label">Selecciona lo que debamos considerar</h3>
    <div class="allergy-list">
      ${["gluten", "milk", "egg", "fish", "shellfish", "sesame", "soy"].map((allergen) => `
        <label class="allergy-choice">
          <input type="checkbox" value="${allergen}" data-known-allergy ${selected.includes(allergen) ? "checked" : ""}>
          <span>${escapeHtml(ALLERGEN_LABELS[allergen])}</span>
        </label>
      `).join("")}
    </div>
    <div class="custom-allergy">
      <label for="customAllergy">Otra alergia o restricción</label>
      <input class="form-control" id="customAllergy" value="${escapeHtml(state.recommendation.customAllergy)}" placeholder="Ej. mostaza">
      <label class="safety-confirm" id="customSafety" ${state.recommendation.customAllergy ? "" : "hidden"}>
        <input type="checkbox" id="customAcknowledged" ${state.recommendation.customAcknowledged ? "checked" : ""}>
        <span>Entiendo que Dishly no puede verificar esta alergia y que debo confirmarla directamente con el personal del restaurante.</span>
      </label>
    </div>
    <p class="allergen-notice"><strong>Importante:</strong> La información de alérgenos es orientativa. Informa siempre al personal sobre alergias graves o riesgo de contaminación cruzada.</p>
    <div class="question-actions">
      <button class="button button-outline" type="button" data-recommender-back>Atrás</button>
      <button class="button button-dark" type="button" data-recommender-results>Ver recomendación</button>
    </div>
  `;
}

function candidateDishes() {
  return DISHES.filter((dish) => {
    if (dish.availability === "sold") return false;
    const safetyList = [...dish.allergens, ...dish.crossContact];
    return !state.recommendation.allergies.some((allergen) => safetyList.includes(allergen));
  });
}

function scoreDish(dish) {
  let score = dish.category === "principales" || dish.category === "vegetariano" ? 1 : 0;
  if (dish.chefFavorite) score += 0.5;
  if (dish.popular) score += 0.25;
  const pref = state.recommendation;
  if (pref.protein && pref.protein !== "any") score += dish.protein === pref.protein ? 8 : -2;
  if (pref.style === "familiar") score += dish.popular ? 3 : 0;
  if (pref.style === "different") score += dish.chefFavorite && !dish.popular ? 3 : dish.chefFavorite ? 1 : 0;
  if (pref.budget && pref.budget !== "any") score += dish.price <= Number(pref.budget) ? 5 : -(dish.price - Number(pref.budget)) / 4;
  if (pref.spice === "none") score += dish.spice === 0 ? 4 : -dish.spice * 2;
  if (pref.spice === "medium") score += dish.spice === 2 ? 4 : 0;
  if (pref.spice === "high") score += dish.spice >= 2 ? 4 : -2;
  if (dish.availability === "last") score -= 0.25;
  return score;
}

function recommendedDish() {
  return candidateDishes()
    .map((dish) => ({ dish, score: scoreDish(dish) }))
    .sort((a, b) => b.score - a.score || a.dish.price - b.dish.price)[0]?.dish || null;
}

function recommendationReason(dish) {
  const reasons = [];
  const pref = state.recommendation;
  const proteinLabels = { fish: "pescado", shellfish: "mariscos", beef: "carne", vegetarian: "una opción vegetariana" };
  if (pref.protein && pref.protein !== "any" && dish.protein === pref.protein) reasons.push(`buscas ${proteinLabels[pref.protein]}`);
  if (pref.budget && pref.budget !== "any" && dish.price <= Number(pref.budget)) reasons.push(`está dentro de tu presupuesto de ${money(Number(pref.budget))}`);
  if (pref.spice === "none" && dish.spice === 0) reasons.push("prefieres algo sin picante");
  if (pref.spice === "medium" && dish.spice === 2) reasons.push("buscas un picante medio");
  if (pref.style === "familiar" && dish.popular) reasons.push("es uno de los platos más pedidos");
  if (pref.style === "different" && dish.chefFavorite) reasons.push("es una selección especial del chef");
  if (state.recommendation.allergies.length) reasons.push("no declara los alérgenos seleccionados ni su contacto cruzado conocido");
  if (!reasons.length) reasons.push("equilibra sabor, disponibilidad y una preparación representativa de Casa Marea");
  return `Elegimos ${dish.name} porque ${reasons.join(", ")}.`;
}

function cheaperAlternative(dish) {
  return candidateDishes()
    .filter((candidate) => candidate.id !== dish.id && candidate.price < dish.price)
    .sort((a, b) => scoreDish(b) - scoreDish(a) || b.price - a.price)[0] || null;
}

function renderRecommendationResult() {
  const dish = recommendedDish();
  if (!dish) {
    refs.recommenderContent.innerHTML = `
      <p class="eyebrow">Resultado</p>
      <h2 id="recommenderTitle">Necesitamos confirmarlo contigo</h2>
      <p class="recommender-intro">No encontramos un plato que podamos sugerir sin coincidir con los alérgenos o contactos cruzados seleccionados.</p>
      <p class="allergen-notice">Consulta directamente con el personal. El restaurante es quien puede confirmar ingredientes, preparación y riesgo real.</p>
      <div class="question-actions">
        <button class="button button-outline" type="button" data-recommender-restart>Empezar de nuevo</button>
        <button class="button button-dark" type="button" data-close-recommender>Ver menú completo</button>
      </div>
    `;
    return;
  }

  const alternative = cheaperAlternative(dish);
  const customWarning = state.recommendation.customAllergy
    ? `<p class="result-notice"><strong>${escapeHtml(state.recommendation.customAllergy)} requiere confirmación:</strong> este resultado no ha sido validado como seguro para esa alergia. Confírmalo con el personal.</p>`
    : "";

  refs.recommenderContent.innerHTML = `
    <p class="eyebrow">Tu recomendación</p>
    <h2 id="recommenderTitle">Una buena elección para ti</h2>
    <div class="recommendation-result">
      <img src="${dish.image}" alt="${escapeHtml(dish.name)}" width="900" height="520">
      <div class="recommendation-copy">
        <h3>${escapeHtml(dish.name)}</h3>
        <p class="recommendation-reason">${escapeHtml(recommendationReason(dish))}</p>
        <div class="result-facts">
          <div><small>Precio</small><strong>${money(dish.price)}</strong></div>
          <div><small>Tiempo aproximado</small><strong>${escapeHtml(dish.time)}</strong></div>
          <div><small>Picante</small><strong>${escapeHtml(spiceLabel(dish.spice))}</strong></div>
          <div><small>Disponibilidad</small><strong>${escapeHtml(availabilityLabel(dish.availability))}</strong></div>
          <div><small>Alérgenos</small><strong>${escapeHtml(formatAllergens(dish.allergens))}</strong></div>
          <div><small>Maridaje</small><strong>${escapeHtml(dish.pairing)}</strong></div>
        </div>
        ${customWarning}
        <p class="result-notice">La información de alérgenos es orientativa. Informa siempre al personal sobre alergias graves o riesgo de contaminación cruzada.</p>
        ${alternative ? `<p class="alternative"><strong>Alternativa más económica:</strong> ${escapeHtml(alternative.name)} · ${money(alternative.price)}</p>` : ""}
        <div class="result-actions">
          <button class="button button-outline" type="button" data-result-dish="${dish.id}">Ver detalles</button>
          <button class="button button-dark" type="button" data-result-add="${dish.id}">Agregar</button>
        </div>
      </div>
    </div>
    <div class="question-actions">
      <button class="text-button" type="button" data-recommender-restart>Empezar de nuevo</button>
      <button class="text-button" type="button" data-close-recommender>Volver al menú</button>
    </div>
  `;
  attachImageFallbacks(refs.recommenderContent);
}

function readAllergyInputs() {
  state.recommendation.allergies = [...refs.recommenderContent.querySelectorAll("[data-known-allergy]:checked")]
    .map((input) => input.value);
  state.recommendation.customAllergy = refs.recommenderContent.querySelector("#customAllergy")?.value.trim() || "";
  state.recommendation.customAcknowledged = refs.recommenderContent.querySelector("#customAcknowledged")?.checked || false;
}

function startTransfer() {
  if (!state.cart.length) return;
  state.transferStep = 0;
  closeLayer(refs.cartLayer);
  renderTransfer();
  openLayer(refs.transferModal);
}

function renderTransfer() {
  const totals = cartTotals();
  const steps = Array.from({ length: 4 }, (_, index) => `<span class="${index <= state.transferStep ? "is-complete" : ""}"></span>`).join("");
  const stepContent = [
    `
      <div class="transfer-panel">
        <h3>Revisar pedido</h3>
        <p class="transfer-summary">${state.cart.reduce((sum, item) => sum + item.quantity, 0)} artículos · ${money(totals.total)} total estimado. Tus personalizaciones y notas están incluidas.</p>
      </div>
    `,
    `
      <div class="transfer-panel">
        <h3>Confirmar Mesa ${state.table}</h3>
        <p class="transfer-summary">La mesa seleccionada pertenece a esta demostración y podría sustituirse por el identificador utilizado por el restaurante.</p>
      </div>
    `,
    `
      <div class="transfer-panel">
        <h3>Destino del pedido</h3>
        <p class="transfer-summary">Dishly actuaría como una capa visual y entregaría la información al flujo configurado por el restaurante.</p>
        <div class="destination">
          <span class="destination-mark">POS</span>
          <div><strong>${DEMO_CONFIG.destinationName}</strong><br><small>Conexión simulada, sin envío real</small></div>
        </div>
      </div>
    `,
    `
      <div class="transfer-success">
        <span class="success-mark" aria-hidden="true">✓</span>
        <h3>Transferencia simulada completada</h3>
        <p class="transfer-summary">No se envió ningún pedido real. En una implementación real, Dishly transferiría este pedido al POS, sistema de pago o flujo configurado por el restaurante.</p>
      </div>
    `,
  ][state.transferStep];

  refs.transferContent.innerHTML = `
    <p class="eyebrow">Demostración del flujo · ${state.transferStep + 1} de 4</p>
    <h2 id="transferTitle">${state.transferStep === 3 ? "Así continuaría el pedido" : "Continuar al sistema del restaurante"}</h2>
    <p class="transfer-intro">Esta experiencia no está conectada a un POS ni procesa pagos.</p>
    <div class="transfer-steps" aria-hidden="true">${steps}</div>
    ${stepContent}
    <div class="transfer-actions">
      ${state.transferStep > 0 && state.transferStep < 3 ? '<button class="button button-outline" type="button" data-transfer-back>Atrás</button>' : "<span></span>"}
      ${state.transferStep < 3
        ? `<button class="button button-dark" type="button" data-transfer-next>${state.transferStep === 2 ? "Continuar al sistema del restaurante" : "Continuar"}</button>`
        : '<button class="button button-dark" type="button" data-close-transfer>Cerrar demostración</button>'}
    </div>
  `;
}

let toastTimer;
function showToast(message) {
  window.clearTimeout(toastTimer);
  refs.toast.textContent = message;
  refs.toast.hidden = false;
  toastTimer = window.setTimeout(() => {
    refs.toast.hidden = true;
  }, 2800);
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button, a");
  if (!target) return;

  if (target.matches("[data-dish-id]")) {
    event.preventDefault();
    openDish(target.dataset.dishId);
  }
  if (target.matches("[data-open-recommender]")) openRecommender();
  if (target.matches("[data-scroll-menu]")) {
    if (!refs.cartLayer.hidden) closeLayer(refs.cartLayer);
    document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
  }
  if (target.matches("[data-filter-shortcut]")) setCategory(target.dataset.filterShortcut);
  if (target.matches("#categoryNav button")) setCategory(target.dataset.category);
  if (target.matches("[data-video-toggle]")) {
    const video = target.closest(".dish-card")?.querySelector("[data-dish-video]");
    if (video?.paused) {
      dishVideoObserver?.unobserve(video);
      playDishVideo(video);
    } else {
      video?.pause();
      if (video && !reducedMotion) dishVideoObserver?.observe(video);
    }
  }
  if (target.matches("#cartTrigger")) {
    renderCart();
    openLayer(refs.cartLayer);
  }
  if (target.matches("[data-close-modal]")) closeLayer(refs.dishModal);
  if (target.matches("[data-close-cart]")) closeLayer(refs.cartLayer);
  if (target.matches("[data-close-recommender]")) closeLayer(refs.recommenderModal);
  if (target.matches("[data-close-transfer]")) closeLayer(refs.transferModal);

  if (target.matches("[data-modal-quantity]")) {
    state.modalQuantity = Math.max(1, Math.min(12, state.modalQuantity + Number(target.dataset.modalQuantity)));
    refs.dishModalContent.querySelector("#modalQuantity").textContent = state.modalQuantity;
    updateModalPrice();
  }
  if (target.matches("[data-cart-quantity]")) updateCartQuantity(target.dataset.lineId, Number(target.dataset.cartQuantity));
  if (target.matches("[data-remove-line]")) removeCartLine(target.dataset.removeLine);
  if (target.matches("[data-edit-line]")) {
    const line = state.cart.find((item) => item.lineId === target.dataset.editLine);
    if (line) {
      closeLayer(refs.cartLayer);
      openDish(line.dishId, line.lineId);
    }
  }
  if (target.matches("[data-start-transfer]")) startTransfer();

  if (target.matches("[data-answer-key]")) {
    state.recommendation[target.dataset.answerKey] = target.dataset.answerValue;
    renderRecommender();
  }
  if (target.matches("[data-recommender-next]")) {
    state.recommenderStep += 1;
    renderRecommender();
  }
  if (target.matches("[data-recommender-skip]")) {
    state.recommendation[RECOMMENDER_STEPS[state.recommenderStep].key] = "any";
    state.recommenderStep += 1;
    renderRecommender();
  }
  if (target.matches("[data-recommender-back]")) {
    state.recommenderStep = Math.max(0, state.recommenderStep - 1);
    renderRecommender();
  }
  if (target.matches("[data-recommender-results]")) {
    readAllergyInputs();
    if (state.recommendation.customAllergy && !state.recommendation.customAcknowledged) {
      showToast("Confirma el aviso sobre la alergia personalizada para continuar.");
      refs.recommenderContent.querySelector("#customAcknowledged")?.focus();
      return;
    }
    state.recommenderStep += 1;
    renderRecommender();
  }
  if (target.matches("[data-recommender-restart]")) {
    resetRecommender();
    renderRecommender();
  }
  if (target.matches("[data-result-dish], [data-result-add]")) {
    const dishId = target.dataset.resultDish || target.dataset.resultAdd;
    closeLayer(refs.recommenderModal);
    openDish(dishId);
  }
  if (target.matches("[data-transfer-next]")) {
    state.transferStep = Math.min(3, state.transferStep + 1);
    renderTransfer();
  }
  if (target.matches("[data-transfer-back]")) {
    state.transferStep = Math.max(0, state.transferStep - 1);
    renderTransfer();
  }
});

document.addEventListener("change", (event) => {
  if (event.target.closest("#dishForm")) updateModalPrice();
  if (event.target.matches("#tableNumber")) {
    state.table = Number(event.target.value);
    localStorage.setItem(TABLE_KEY, String(state.table));
  }
  if (event.target.matches("[data-known-allergy]")) readAllergyInputs();
  if (event.target.matches("#customAcknowledged")) state.recommendation.customAcknowledged = event.target.checked;
});

document.addEventListener("input", (event) => {
  if (event.target.matches("#customAllergy")) {
    state.recommendation.customAllergy = event.target.value.trim();
    const safety = refs.recommenderContent.querySelector("#customSafety");
    safety.hidden = !state.recommendation.customAllergy;
    if (!state.recommendation.customAllergy) {
      state.recommendation.customAcknowledged = false;
      const checkbox = refs.recommenderContent.querySelector("#customAcknowledged");
      if (checkbox) checkbox.checked = false;
    }
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.matches("#dishForm")) {
    event.preventDefault();
    saveDishFromModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!refs.transferModal.hidden) closeLayer(refs.transferModal);
  else if (!refs.recommenderModal.hidden) closeLayer(refs.recommenderModal);
  else if (!refs.dishModal.hidden) closeLayer(refs.dishModal);
  else if (!refs.cartLayer.hidden) closeLayer(refs.cartLayer);
});

renderDishes();
renderCart();
