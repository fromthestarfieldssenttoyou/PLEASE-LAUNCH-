
const dots = document.querySelectorAll('.dot');
const arrows = document.querySelectorAll('.arrow');
let currentSlide = 0;

function updateCarousel() {
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

arrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    if (arrow.classList.contains('left')) {
      currentSlide = (currentSlide === 0) ? dots.length - 1 : currentSlide - 1;
    } else {
      currentSlide = (currentSlide + 1) % dots.length;
    }
    updateCarousel();
  });
});

updateCarousel();
