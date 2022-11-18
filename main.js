function alertButton() {
    alert('クリックされました')
}

let button = document.querySelector('.side-menu-btn-open');
let openMenu = function() {
    button.classList.add('active');
}