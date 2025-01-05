
var swiper = new Swiper(".mySwiper", {
    loop:true,
    autoplay:true,
    autoplayTime:900,
    // controls:false,
    // cursor:true,
    // autoplayMoverPause:true,

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },
    // pagination: {
    //     el: ".swiper-pagination1",
    //     el: ".swiper-pagination2",
    // },
});
