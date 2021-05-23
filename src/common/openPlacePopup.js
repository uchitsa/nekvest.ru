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
    // console.log('modal open');
  },
  onClose() {
    // console.log('modal closed');
  },
  beforeClose() {
    return true; // close the modal
  },
});

const openPlacePopup = (props) => {
  const { place, removePlace } = props;
  const { id, name, description, task, answers } = place;

  // const renderContentMedia = () => {
  //   if (videoUrl) {
  //     return `<iframe class="places__video" src="${videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  //   }

  //   if (photo) {
  //     return `<img class="place-popup__img" src="http://s3.fotokto.ru/photo/full/249/2494808.jpg" alt="">`;
  //   }

  //   return '';
  // };

  const renderForm = () => {
    const form = document.createElement('form');

    form.innerHTML = '';

    return `<form>
      <div class="task__questions radio-btns">${answers
        .map(
          (
            answer,
            index,
          ) => `<input class="option-input" type="radio" name="select" id="option-${index}">
        <label for="option-${index}" class="option">
          <div class="dot"></div>
            <span>${answer}</span>
            </label>`,
        )
        .join('')}</div>
        <button class="btn btn-success task__submit" type="submit">Подтвердить</button>
    </form>`;
  };

  modal.setContent(`
    <div class="place-popup">
      <div class="place-popup__container">
        <h2 class="place-popup__title">${name}</h2>
        <img class="place-popup__img" src="http://s3.fotokto.ru/photo/full/249/2494808.jpg" alt="">
        <div class="place-popup__text">${description}</div>
        <div class="task">
          <h3 class="task__title">Задание:</h3>
          <div class="task__content">${task}</div>
          ${renderForm()}
        </div>
      </div>
    </div>
  `);

  modal.open();
  // console.log(id);
  removePlace({ id });
};

export default openPlacePopup;
