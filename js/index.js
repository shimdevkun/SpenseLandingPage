const menu = document.getElementById('menu-icon');
const navActions = document.getElementById('nav-actions');

menu.addEventListener('click', toggleMenu);

function toggleMenu() {
    navActions.classList.toggle('hidden');
}
