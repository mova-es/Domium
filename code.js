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