// Update the footer year automatically.
document.querySelector('#year').textContent = new Date().getFullYear();

// Give the fixed navigation a subtle background after scrolling.
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// Open each painting in a full-screen lightbox.
const lightbox = document.querySelector('#lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxTitle = document.querySelector('#lightbox-title');

document.querySelectorAll('.artwork').forEach((button) => {
  button.addEventListener('click', () => {
    const image = button.querySelector('img');
    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt;
    lightboxTitle.textContent = button.dataset.title;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
}

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox || event.target.classList.contains('close')) {
    closeLightbox();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});
