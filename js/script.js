/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, sideMenuClass) => {
  const toggle = document.querySelector(toggleId);
  const sideMenu = document.querySelector(sideMenuClass);
  
  // Validate that variables exist
  if(toggle && sideMenu){
    toggle.addEventListener('click', () => {
      // We add the show-menu class to the div tag with the nav__menu class
      sideMenu.classList.add('show-menu');
    })
  }
}
showMenu('.nav-toggle','.side-menu');

const closeMenu = (btnClose, sideMenuClass) => {
  const close = document.querySelector(btnClose);
  const sideMenu = document.querySelector(sideMenuClass);

  if (close && sideMenu) {
    close.addEventListener('click', () => {
      sideMenu.classList.remove('show-menu');
    })
  }
}
closeMenu('.close-side-menu','.side-menu')

/*==================== Initialize Swiper ====================*/
var swiper = new Swiper('.swiper-container', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});