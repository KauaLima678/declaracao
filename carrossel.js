let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');

// Criar os dots dinamicamente
slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('span');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
      dots[i].classList.add('active');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}


showSlide(currentIndex);


setInterval(nextSlide, 5000);