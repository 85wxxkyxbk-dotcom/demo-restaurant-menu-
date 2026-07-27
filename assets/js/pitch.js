'use strict';

const CONTACT_CONFIG = Object.freeze({
  endpoint: '',
  email: '',
  calendarUrl: ''
});

const modal = document.getElementById('contact-modal');
const form = document.getElementById('contact-form');
const success = document.getElementById('contact-success');
const error = document.getElementById('contact-error');
let lastFocused = null;

function openContact() {
  lastFocused = document.activeElement;
  modal.hidden = false;
  document.body.classList.add('modal-open');
  modal.querySelector('input').focus();
}

function closeContact() {
  modal.hidden = true;
  document.body.classList.remove('modal-open');
  form.hidden = false;
  success.hidden = true;
  error.textContent = '';
  lastFocused?.focus();
}

document.querySelectorAll('[data-open-contact]').forEach((button) => {
  button.addEventListener('click', openContact);
});

document.querySelectorAll('[data-close-contact]').forEach((button) => {
  button.addEventListener('click', closeContact);
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) closeContact();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.hidden) closeContact();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  error.textContent = '';

  if (!form.checkValidity()) {
    error.textContent = 'Revisa los campos obligatorios y el formato del correo o enlace.';
    form.reportValidity();
    return;
  }

  if (CONTACT_CONFIG.endpoint || CONTACT_CONFIG.email || CONTACT_CONFIG.calendarUrl) {
    error.textContent = 'La integración de contacto debe implementarse antes de enviar datos reales.';
    return;
  }

  form.hidden = true;
  success.hidden = false;
  success.querySelector('button').focus();
});

const specials = ['Branzino al limón Meyer', 'Risotto de langosta', 'Burrata con tomates asados'];
let specialIndex = 0;
document.querySelector('[data-change-special]').addEventListener('click', () => {
  specialIndex = (specialIndex + 1) % specials.length;
  document.querySelector('[data-special-label]').textContent = specials[specialIndex];
});

document.querySelectorAll('[data-control-row] .switch input').forEach((input) => {
  input.addEventListener('change', () => {
    const label = input.closest('.switch').querySelector('em');
    if (label.textContent === 'Disponible' || label.textContent === 'Agotado') {
      label.textContent = input.checked ? 'Disponible' : 'Agotado';
    } else {
      label.textContent = input.checked ? 'Destacado' : 'Sin destacar';
    }
  });
});

const header = document.querySelector('[data-header]');
const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
