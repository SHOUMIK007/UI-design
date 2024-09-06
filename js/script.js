$(document).ready(function(){
    $(".hamburger").click(function(){
        $(".nav-menu").toggleClass("toggle-menu")
    })
    $(".close").click(function(){
        $(".nav-menu").toggleClass("toggle-menu")
    })
})
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next-1",
      prevEl: ".swiper-button-prev-1",
    },
    speed: 1000,
  });