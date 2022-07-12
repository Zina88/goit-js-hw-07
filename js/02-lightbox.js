import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const GalleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryCard(galleryItems);
GalleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryCard(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" 
                src="${preview}" 
                alt="${description}" 
            />
        </a>
            `;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
