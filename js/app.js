// const navbar = document.getElementById("my-nav-header");
// const sticky = navbar.offsetTop;
// function myFunction() {
//   console.log(window.scrollY, sticky)
//   if (window.pageYOffset > sticky) {
//   navbar.classList.add("sticky")
//   } else {
//   navbar.classList.remove("sticky");
//   }
// }

// window.onscroll = function(){
//   console.log("Hello")
//   myFunction()
// }
// console.log(window.scrollY)




// let slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides();
}

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("slides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
  
// }
// setTimeout(showSlides, 2000)

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 5,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 10,
      slidesPerGroup: 5,
    }
  }
});

let testSlideIndex = 0;
showTestSlides();

function showTestSlides() {
  let i;
  let slides = document.getElementsByClassName("test-slide");
  let dots = document.getElementsByClassName("testimonial-dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  testSlideIndex++;
  if (testSlideIndex > slides.length) {testSlideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[testSlideIndex-1].style.display = "block";  
  dots[testSlideIndex-1].className += " active";
  setTimeout(showTestSlides, 5000); // Change image every 2 seconds
}

