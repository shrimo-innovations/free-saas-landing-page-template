
const navToggle = document.querySelector('[data-nav-toggle]');
const navLinks = document.querySelector('[data-nav-links]');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

document.querySelectorAll('[data-demo-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const msg = form.querySelector('[data-form-message]');
    if (msg) msg.textContent = 'Thanks! Your request has been recorded in this demo.';
    form.reset();
  });
});
