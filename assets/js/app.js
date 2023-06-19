$(function(){
    // Slick Start Here 
    $('.banner_slider').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows:false,
        fade: true,
        dots: true,
        dotsClass: "banner_slider_dots",
      });
})

setTimeout(function(){
  document.querySelector('#newsletter').style.transform = "scale(1)"
}, 5000);

