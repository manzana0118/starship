$(document).ready(function(){  

    // 모달창
    let modal_close = $('.modal-close');
    let modal = $('.modal');

    modal_close.click(function(){
        modal.hide();
    });

    let modal_bt = $('.modal-bt');
    modal_bt.click(function(){
        modal.show();
    });

    let top_banner = $('.top-banner');
    let banner_close = $('.top-banner-close');

    banner_close.click(function(){
        top_banner.hide();
    });

    // 슬라이드
    let sw_contets = new Swiper(".sw-contents", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000, 
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".contents-button-next",
            prevEl: ".contents-button-prev",
        },
        });

});