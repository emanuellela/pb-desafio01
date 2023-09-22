const hamburgerButton = document.querySelector('.hamburger-button');

hamburgerButton.addEventListener('click', () => {
  hamburgerButton.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
  const dropdownButton = document.getElementById("dropdown-button");

  dropdownButton.addEventListener("click", function() {
      dropdownButton.focus();
  });
});