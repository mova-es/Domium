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