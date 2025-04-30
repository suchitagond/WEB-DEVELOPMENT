let searchForm = document.querySelector('.search');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    account.classList.remove('active');
    bars.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#card-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    account.classList.remove('active');
    bars.classList.remove('active');
}


let account = document.querySelector('.login-account');

document.querySelector('#login-btn').onclick = () => {
    account.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    bars.classList.remove('active');
}


let bars = document.querySelector('.heading');

document.querySelector('#menu-bar').onclick = () => {
    bars.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    account.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    account.classList.remove('active');
    bars.classList.remove('active');
}


var swiper = new Swiper(".feature .mySwiper", {

    loop:true,
    autoplay:true,
    // autoplayTime:300,

    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },

    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        850: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1170: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1500: {
            slidesPerView: 5,
            spaceBetween: 5,
        },
    },
});

var swiper = new Swiper(".product .mySwiper", {

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1600: {
            slidesPerView: 4,
            spaceBetween: 5,
        },
    },
});