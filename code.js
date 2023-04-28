const slideEls = document.querySelectorAll(".slide");
const mainEl = document.querySelector('.main');

slideEls.forEach((slide) => {
  slide.addEventListener("click", function (e) {
    removeClassesActive();
    slide.classList.add("active");
  });
});

function removeClassesActive() {
  slideEls.forEach((slide) => {
    slide.classList.remove("active");
  });
}

const headEl = document.querySelector('.header');
    window.addEventListener('scroll', function (e) {
      const headHeight = headEl.getBoundingClientRect().height;
      if (window.pageYOffset > 0) {
        headEl.classList.add('fix__head');
        mainEl.style.paddingTop = headHeight + "px";
      }
      else {
        headEl.classList.remove('fix__head');
        mainEl.style.paddingTop = 0;
      }
    });
    
// const video = document.querySelector('.overview_video');
// video.playbackRate = 0.5;

const aristoLink = document.querySelector('.aristo_link');
aristoLink.addEventListener('click', function (e) {
  document.getElementById('aristo').scrollIntoView({behavior: "smooth"});
});

const gliverLink = document.querySelector('.gliver_link');
gliverLink.addEventListener('click', function (e) {
  document.getElementById('gliver').scrollIntoView({behavior: "smooth"});
});

const aristoImages = document.querySelector('.partner__aristo-images');
const aristoSlider = document.querySelector('.aristo__slider');
const exit = document.querySelector('.exit');

aristoImages.addEventListener('click', function (e) {
  aristoSlider.classList.remove('hide');
  aristoSlider.scrollIntoView();
  document.querySelector('body').classList.add('slider-on');
});

exit.addEventListener('click', function (e) {
  aristoSlider.classList.add('hide');
  document.querySelector('body').classList.remove('slider-on');
});


const aristoImagesGarage = document.querySelector('.garage');
const aristoSliderGarage = document.querySelector('.slider_garage');
const exitGarage = document.querySelector('.exit-garage');

aristoImagesGarage.addEventListener('click', function (e) {
  aristoSliderGarage.classList.remove('hide');
  aristoSliderGarage.scrollIntoView();
  document.querySelector('body').classList.add('slider-on');
});

exitGarage.addEventListener('click', function (e) {
  aristoSliderGarage.classList.add('hide');
  document.querySelector('body').classList.remove('slider-on');
});

const gliverImagesChair = document.querySelector('.partner__gliver-images');
const gliverSliderChair = document.querySelector('.gliver__slider');
const exitChair = document.querySelector('.gliver1_exit');

gliverImagesChair.addEventListener('click', function (e) {
  gliverSliderChair.classList.remove('hide');
  gliverSliderChair.scrollIntoView();
  document.querySelector('body').classList.add('slider-on');
});

exitChair.addEventListener('click', function (e) {
  gliverSliderChair.classList.add('hide');
  document.querySelector('body').classList.remove('slider-on');
});

const gliverImagesDivan = document.querySelector('.divan');
const gliverSliderDivan = document.querySelector('.slider_divan');
const exitDivan = document.querySelector('.gliver2_exit');

gliverImagesDivan.addEventListener('click', function (e) {
  gliverSliderDivan.classList.remove('hide');
  gliverSliderDivan.scrollIntoView();
  document.querySelector('body').classList.add('slider-on');
});

exitDivan.addEventListener('click', function (e) {
  gliverSliderDivan.classList.add('hide');
  document.querySelector('body').classList.remove('slider-on');
});



$(function() {
  
  var slideCount =  $(".slider ul li").length;
  var slideWidth =  $(".slider ul li").width();
  var slideHeight =  $(".slider ul li").height();
  var slideUlWidth =  slideCount * slideWidth;
  
  $(".slider").css({"max-width":slideWidth, "height": slideHeight});
  $(".slider ul").css({"width":slideUlWidth, "margin-left": - slideWidth });
  $(".slider ul li:last-child").prependTo($(".slider ul"));
  
  function moveLeft() {
    $(".slider ul").stop().animate({
      left: + slideWidth
    },700, function() {
      $(".slider ul li:last-child").prependTo($(".slider ul"));
      $(".slider ul").css("left","");
    });
  }
  
  function moveRight() {
    $(".slider ul").stop().animate({
      left: - slideWidth
    },700, function() {
      $(".slider ul li:first-child").appendTo($(".slider ul"));
      $(".slider ul").css("left","");
    });
  }
  
  
  $(".next").on("click",function(){
    moveRight();
  });
  
  $(".prev").on("click",function(){
    moveLeft();
  });
  
  
});




$(function() {
  
  var slideCount =  $(".slider2 ul li").length;
  var slideWidth =  $(".slider2 ul li").width();
  var slideHeight =  $(".slider2 ul li").height();
  var slideUlWidth =  slideCount * slideWidth;
  
  $(".slider2").css({"max-width":slideWidth, "height": slideHeight});
  $(".slider2 ul").css({"width":slideUlWidth, "margin-left": - slideWidth });
  $(".slider2 ul li:last-child").prependTo($(".slider2 ul"));
  
  function moveLeft() {
    $(".slider2 ul").stop().animate({
      left: + slideWidth
    },700, function() {
      $(".slider2 ul li:last-child").prependTo($(".slider2 ul"));
      $(".slider2 ul").css("left","");
    });
  }
  
  function moveRight() {
    $(".slider2 ul").stop().animate({
      left: - slideWidth
    },700, function() {
      $(".slider2 ul li:first-child").appendTo($(".slider2 ul"));
      $(".slider2 ul").css("left","");
    });
  }
  
  
  $(".next").on("click",function(){
    moveRight();
  });
  
  $(".prev").on("click",function(){
    moveLeft();
  });
  
  
});

$(function() {
  
  var slideCount =  $(".slider3 ul li").length;
  var slideWidth =  $(".slider3 ul li").width();
  var slideHeight =  $(".slider3 ul li").height();
  var slideUlWidth =  slideCount * slideWidth;
  
  $(".slider3").css({"max-width":slideWidth, "height": slideHeight});
  $(".slider3 ul").css({"width":slideUlWidth, "margin-left": - slideWidth });
  $(".slider3 ul li:last-child").prependTo($(".slider3 ul"));
  
  function moveLeft() {
    $(".slider3 ul").stop().animate({
      left: + slideWidth
    },700, function() {
      $(".slider3 ul li:last-child").prependTo($(".slider3 ul"));
      $(".slider3 ul").css("left","");
    });
  }
  
  function moveRight() {
    $(".slider3 ul").stop().animate({
      left: - slideWidth
    },700, function() {
      $(".slider3 ul li:first-child").appendTo($(".slider3 ul"));
      $(".slider3 ul").css("left","");
    });
  }
  
  
  $(".next").on("click",function(){
    moveRight();
  });
  
  $(".prev").on("click",function(){
    moveLeft();
  });
  
  
});

$(function() {
  
  var slideCount =  $(".slider4 ul li").length;
  var slideWidth =  $(".slider4 ul li").width();
  var slideHeight =  $(".slider4 ul li").height();
  var slideUlWidth =  slideCount * slideWidth;
  
  $(".slider4").css({"max-width":slideWidth, "height": slideHeight});
  $(".slider4 ul").css({"width":slideUlWidth, "margin-left": - slideWidth });
  $(".slider4 ul li:last-child").prependTo($(".slider4 ul"));
  
  function moveLeft() {
    $(".slider4 ul").stop().animate({
      left: + slideWidth
    },700, function() {
      $(".slider4 ul li:last-child").prependTo($(".slider4 ul"));
      $(".slider4 ul").css("left","");
    });
  }
  
  function moveRight() {
    $(".slider4 ul").stop().animate({
      left: - slideWidth
    },700, function() {
      $(".slider4 ul li:first-child").appendTo($(".slider4 ul"));
      $(".slider4 ul").css("left","");
    });
  }
  
  
  $(".next").on("click",function(){
    moveRight();
  });
  
  $(".prev").on("click",function(){
    moveLeft();
  });
  
  
});