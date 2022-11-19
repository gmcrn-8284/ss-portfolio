function alertButton() {
    alert('クリックされました')
}

const redOpa = document.querySelector('.red');
const redOpapa = addEventListener('click', () => {
    redOpa.classList.toggle('.open');
});

const openMenuBtn = document.querySelector('side-menu-btn');
const sideMenu = document.getElementsByClassName('side-menu')
const openMenu = openMenuBtn.addEventListener('click', () => {
    // sideMenu.classList.toggle('open');
    alert('OK');
});

