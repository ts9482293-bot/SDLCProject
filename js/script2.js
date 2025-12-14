 AOS.init({
    duration: 1000,     
    easing: "ease-in-out",
    once: true,       
    offset: 120,        
  });

  // nav-link
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(item => item.classList.remove('active'));
      link.classList.add('active');
    });
  });