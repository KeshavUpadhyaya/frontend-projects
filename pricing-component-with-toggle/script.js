const toggle = document.getElementById('toggle');
const priceContainer = document.getElementById('price-container');

toggle.addEventListener('change', () => {
  priceContainer.classList.toggle('show-monthly');
});