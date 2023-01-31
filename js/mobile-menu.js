// мобильное меню //

const buttonBurger = document.querySelector('.menu__burger_button');
const menuMobile = document.querySelector('.mobile__menu');
const menuMobileSection = document.querySelector('.mobile__menu-section');
const buttonCloseMobileMenu = document.querySelector('.btn-close');

// функция закрытия мобильного меню //

function closeMobeliMenu(evt, elem) {
  evt.classList.remove('mobile__menu_visible');
  elem.classList.remove('mobile__menu_visible');
}

buttonBurger.addEventListener('click', () => {
  menuMobile.classList.add('mobile__menu_visible');
  menuMobileSection.classList.add('mobile__menu_visible');
})
buttonCloseMobileMenu.addEventListener('click', () => {
  // menuMobile.classList.remove('mobile__menu_visible');
  // menuMobileSection.classList.remove('mobile__menu_visible');
  closeMobeliMenu(menuMobile, menuMobileSection);
})

menuMobileSection.addEventListener('mousedown', evt => {
  if (evt.target === evt.currentTarget) {
    // menuMobile.classList.remove('mobile__menu_visible');
    // menuMobileSection.classList.remove('mobile__menu_visible');
    closeMobeliMenu(menuMobile, menuMobileSection);
  }
})
