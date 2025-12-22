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

  // counter
  const counters = document.querySelectorAll('.counter');
const speed = 200; // lower = faster

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 15);
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCount();
});