import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryCard(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onGalleryCardClick);

function createGalleryCard(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src=${preview}
            data-source=${original}
            alt=${description}
          />
        </a>
      </div>
          `;
    })
    .join('');
}

function onGalleryCardClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  const isSrcPicture = event.target.dataset.source;
  const isAltPicture = event.target.alt;

  const instance = basicLightbox.create(`
  <img src="${isSrcPicture}" alt="${isAltPicture}" width="800"    height="600">
    `);

  instance.show();

  window.addEventListener('keydown', onTargetKeydown);

  function onTargetKeydown(event) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = event.code === ESC_KEY_CODE;

    if (isEscKey) {
      instance.close();
      window.removeEventListener('keydown', onTargetKeydown);
    }
  }
}
