/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, sideMenuClass) => {
  const toggle = document.getElementById(toggleId);
  const sideMenu = document.getElementById(sideMenuClass);
  
  // Validate that variables exist
  if(toggle && sideMenu){
    toggle.addEventListener('click', () => {
      // We add the show-menu class to the div tag with the nav__menu class
      sideMenu.classList.add('show-menu');
    })
  }
}
showMenu('nav_toggle','side_menu');

const closeMenu = (btnClose, sideMenuClass) => {
  const close = document.getElementById(btnClose);
  const sideMenu = document.getElementById(sideMenuClass);

  if (close && sideMenu) {
    close.addEventListener('click', () => {
      sideMenu.classList.remove('show-menu');
    })
  }
}
closeMenu('close_side_menu','side_menu')