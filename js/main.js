// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', () => {
      localStorage.setItem('formSubmitted', 'true');
    });

    const formSubmitted = localStorage.getItem('formSubmitted');

    if (formSubmitted) {
      contactForm.reset();
      localStorage.removeItem('formSubmitted');
    }
  }
});


// Fungsi untuk menampilkan atau menyembunyikan tombol scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var scrollBtn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

function scrollToTop() {
  var scrollStep = -window.scrollY / (200 / 100); // Ubah nilai 200 untuk kecepatan yang lebih cepat
  var scrollInterval = setInterval(function(){
    if (window.scrollY != 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  },10); // Ubah nilai 10 untuk efek scroll yang lebih halus
}
