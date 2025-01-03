var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  // Initialize Swiper
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1, // Number of slides to show at once
  spaceBetween: 10, // Space between slides
  loop: true, // Enable looping
  autoplay: {
    delay: 3000, // Delay between slides (milliseconds)
  },
  navigation: {
    nextEl: ".swiper-button-next", // Next button selector
    prevEl: ".swiper-button-prev", // Previous button selector
  },
});

 // Initialize "mycarousel"
 $('#mycarousel').carousel();
        
 // Initialize "newCarousel"
 $('#newCarousel').carousel();