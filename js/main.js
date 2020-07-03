const hamburger = document.querySelector('.hamburger');
const hamburgerClose = document.querySelector('.hamburger-close');
const navigationMenu = document.querySelector('header nav');

function showHideMenu() {

  if (navigationMenu.classList.contains('visibility')) {
    console.log('ukryte');
    navigationMenu.classList.toggle('visibility');
    hamburger.classList.remove('hidden');
  } else {
    console.log('widoczne');
    navigationMenu.classList.toggle('visibility');
    hamburger.classList.add('hidden');

  }
}

hamburger.addEventListener('click', showHideMenu);
hamburgerClose.addEventListener('click', showHideMenu);