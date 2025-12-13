var swiper = new Swiper(".myswiper", {
  //   direction: "vertical",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
const swiper2 = new Swiper(".trustslider", {
  loop: true,
  freeMode: true,
  freeModeMomentum: false,     // IMPORTANT: stops momentum "jump"
  slidesPerView: "auto",
  spaceBetween: 43,

  speed: 6000,                 // slow, smooth flow
  autoplay: {
    delay: 0,                  // no pause
    disableOnInteraction: false
  },

  allowTouchMove: false,       // no user dragging (optional)
});

var swiper3 = new Swiper('.work-swiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 40,
  slidesPerView: "auto",
});
var swiper4 = new Swiper('.services-swiper', {
  // Optional parameters
  loop: true,
   freeMode: true,
  freeModeMomentum: false,    
  slidesPerView: "auto",
  spaceBetween: 43,

  speed: 6000,                 
  autoplay: {
    delay: 0,                  
    disableOnInteraction: false
  },

  allowTouchMove: false,       
  spaceBetween: 35,
  slidesPerView: "auto",
});

 const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(item => item.classList.remove('active'));
      link.classList.add('active');
    });
  });

    AOS.init({
        duration: 1000,  
        once: true        
    });

    luxy.init({
    wrapper: '#luxy',
    targets : '.luxy-el', 
    wrapperSpeed: 0.08
  });
