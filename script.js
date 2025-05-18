window.onload = function () {
  const modal = document.getElementById("welcome-modal");
  const modalContent = document.querySelector(".modal-content");

  if (modal) {
    modal.style.display = "flex"; 
    modal.setAttribute("aria-hidden", "false"); 
    modalContent.focus(); 
    document.body.style.overflow = "hidden"; 
  }
};

function closeModal() {
  const modal = document.getElementById("welcome-modal");

  if (modal) {
    modal.style.display = "none"; 
    modal.setAttribute("aria-hidden", "true"); 
    document.body.style.overflow = ""; 
  }
}

let slideIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll(".carousel-slide");
  slideIndex = (slideIndex + step + slides.length) % slides.length;
  const carousel = document.querySelector(".carousel");
  carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function startAutoSlide() {
  setInterval(() => {
    moveSlide(1);
  }, 8000);
}

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".carousel-slide");
  if (slides.length > 0) {
    slides[0].classList.add("active");
  }
  startAutoSlide();
});
window.onload = function () {

  document.getElementById("nav-bar").style.display = "none";
};
function toggleNav() {
  var navBar = document.getElementById("nav-bar");
  var menuBtn = document.getElementById("menu-btn");


  navBar.style.display = navBar.style.display === "block" ? "none" : "block";

  
  menuBtn.innerHTML = navBar.style.display === "block" ? "×" : "☰";
}
