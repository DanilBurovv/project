const form = document.querySelector('.site-footer__email');
const emailInput = document.querySelector('.site-footer__txt');
const errorMsg = document.querySelector('#error-msg');

form.addEventListener('submit', function(event) {
  if (!emailInput.value || !emailInput.value.includes('@')) {
    event.preventDefault();
    errorMsg.style.display = 'block';
  }
});