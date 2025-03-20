window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 68) { 
      navbar.classList.add('sticky-top');
    } else {
      navbar.classList.remove('sticky-top');
    }
  });