window.onload = function () {
  const modal = document.getElementById("welcome-modal");
  const modalContent = document.querySelector(".modal-content");

  if (modal) {
    modal.style.display = "flex"; // Show modal
    modal.setAttribute("aria-hidden", "false"); // Accessibility improvement
    modalContent.focus(); // Focus modal content
    document.body.style.overflow = "hidden"; // Lock page scroll
  }
};

function closeModal() {
  const modal = document.getElementById("welcome-modal");

  if (modal) {
    modal.style.display = "none"; // Hide modal
    modal.setAttribute("aria-hidden", "true"); // Accessibility improvement
    document.body.style.overflow = ""; // Unlock page scroll
  }
}

// Carousel Functionality
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
  // Ensure the nav bar is hidden when the page loads
  document.getElementById("nav-bar").style.display = "none";
};
function toggleNav() {
  var navBar = document.getElementById("nav-bar");
  var menuBtn = document.getElementById("menu-btn");

  // Toggle the navigation visibility
  navBar.style.display = navBar.style.display === "block" ? "none" : "block";

  // Change button text to '×' (close button) when nav is open
  menuBtn.innerHTML = navBar.style.display === "block" ? "×" : "☰";
}
