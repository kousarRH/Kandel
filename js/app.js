
  const menucard = document.getElementById('menu-card');
  const sideMenu = document.getElementById('side-menu');
  const menuOverlay = document.getElementById('menu-overlay');

  menucard.addEventListener('click', () => {
    sideMenu.classList.add('open');
    menuOverlay.classList.add('show');

  });

  menuOverlay.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    menuOverlay.classList.remove('show');
  });