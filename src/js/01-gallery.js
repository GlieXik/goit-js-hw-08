// Add imports above this line
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryWrapper = document.querySelector('.gallery');

const createMarkup = () => {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </div>`
    )
    .join('');
};
function onClickImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
  console.log(lightbox);
}

galleryWrapper.innerHTML = createMarkup();
galleryWrapper.addEventListener('click', onClickImg);
