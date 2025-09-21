const images = ['01.png', '02.png', '03.png'];
let currentIndex = Math.floor(Math.random() * images.length);
let carouselImage = document.getElementById('carousel-image');

function changeImage() {
  carouselImage.style.opacity = 0;

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImage.src = images[currentIndex];
    carouselImage.style.opacity = 1;
  }, 500);
}

window.onload = () => {
  carouselImage.src = images[currentIndex];
  setInterval(changeImage, 8000);

  // Lecture du son d'intro une seule fois
  const introSound = document.getElementById('intro-sound');
  introSound.play().catch(e => {
    console.warn("Lecture du son bloquée par le navigateur. Elle sera autorisée après interaction.");
  });
};
