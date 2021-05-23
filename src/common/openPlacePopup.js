import 'tingle.js/dist/tingle.css';
import tingle from 'tingle.js';

// eslint-disable-next-line new-cap
const modal = new tingle.modal({
  footer: false,
  stickyFooter: false,
  closeMethods: ['overlay', 'button', 'escape'],
  closeLabel: 'Close',
  cssClass: ['custom-class-1'],
  onOpen() {
    console.log('modal open');
  },
  onClose() {
    console.log('modal closed');
  },
  beforeClose() {
    return true; // close the modal
  },
});

const openPlacePopup = (place) => {
  const { name, description, videoUrl, photo } = place;

  const contentMedia = () => {
    if (videoUrl) {
      return `<iframe class="places__video" src="${videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }

    if (photo) {
      return `<img class="place-popup__img" src="http://s3.fotokto.ru/photo/full/249/2494808.jpg" alt="">`;
    }

    return '';
  };

  modal.setContent(`
    <div class="place-popup">
      <div class="place-popup__container">
        <h2 class="place-popup__title">${name}</h2>
        ${contentMedia()}
        <div class="place-popup__text">${description}</div>
        <div class="task">
          <h3 class="task__title">Задание:</h3>
        </div>
      </div>
    </div>
  `);

  modal.open();
};

export default openPlacePopup;
