import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('div.gallery');

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const galleryMarkup = createGalleryMarkup();

function createGalleryMarkup() {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `
    }).join('');
};

gallery.innerHTML = galleryMarkup;


// 2. Реалізація делегування на div.gallery і отримання url великого зображення.

// 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.

// 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.

// 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

gallery.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

instance.show()

// Закриття з клавіатури

window.addEventListener('keydown', onEscapeKeyPress);

function onEscapeKeyPress(event) {
    // console.log(event.key);
    // console.log(event.code);

    const isEscapeKey = event.code === 'Escape';

    if (isEscapeKey) {
        instance.close()
    }
}
};