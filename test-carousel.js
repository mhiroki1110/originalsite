$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: false,
            items: 1,
            autoplay: true,
            autoplayTimeout:2500,
            lazyLoad: true,
            animateOut: 'fadeOut',  // WOW-master/css/libs/animate.cssを利用
        }
    );
});
