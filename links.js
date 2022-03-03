const linksElement = document.getElementById('links');
const hamburgerMenu = document.querySelector('#menu-toggle');

if (hamburgerMenu.checked) {
  linksElement.hidden = false;
}