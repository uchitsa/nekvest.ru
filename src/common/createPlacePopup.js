import 'tingle.js/dist/tingle.css';
import tingle from 'tingle.js';

// eslint-disable-next-line new-cap
const modal = new tingle.modal({
  footer: false,
  stickyFooter: false,
  closeMethods: ['overlay', 'button', 'escape'],
  closeLabel: 'Close',
  cssClass: ['custom-class-1'],
});

const createPlacePopup = (props) => {
  const { place, completePlace, incrementUserScore } = props;
  const {
    id,
    name,
    description,
    task,
    answers,
    rightAnswerIndex,
    photoUrl,
    taskVideoUrl,
    audioUrl,
    address,
    score,
  } = place;
  const rightAnswer = `answer-${rightAnswerIndex}`;

  const renderContentMedia = () => {
    if (photoUrl) {
      return `<img class="place-popup__img" src="${photoUrl}" alt="">`;
    }

    return '';
  };

  const renderAnswer = () => {
    return `<div class="answer">
      <div></div>
    </div>`;
  };

  const renderBonus = () => {
    return `
      <div class="task__bonus">
        <div class="task__bonus-score">Вы получили <span class="task__bonus-score-value"></span> баллов</div>
        <button class="btn btn-warning task__btn-my-question">Задать свой вопрос</button>
      </div>
    `;
  };

  const renderForm = () => {
    return `<form class="task__form">
      <div class="task__questions radio-btns">${answers
        .map((answer, index) => {
          const inputId = `answer-${index}`;
          return `<input class="option-input" type="radio" name="task-answer" value="${inputId}" id="${inputId}">
            <label for="${inputId}" class="option" data-right-answer="${inputId}">
              <div class="dot"></div>
                <span>${answer}</span>
                </label>`;
        })
        .join('')}</div>
        ${renderAnswer()}
        ${renderBonus()}
        <button class="btn btn-success task__submit" type="submit">Подтвердить</button>
        <button class="btn btn-primary task__btn-next">Продолжить</button>
    </form>`;
  };

  const renderQuestionMedia = () => {
    if (taskVideoUrl) {
      return `<iframe class="task__video" src="${taskVideoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }

    if (audioUrl) {
      return `<audio
      controls
      src="${audioUrl}">
  </audio>`;
    }

    return '';
  };

  const renderDescription = () => {
    if (!description) {
      return '';
    }

    return `<div class="place-popup__text">${description}</div>`;
  };

  const renderTask = () => {
    if (!completePlace) {
      return '';
    }

    return `<div class="task">
    <h3 class="task__title">Задание:</h3>
    <div class="task__content">
      <div>${task}</div>${renderQuestionMedia()}
    </div>
    ${renderForm()}
  </div>`;
  };

  modal.setContent(`
    <div class="place-popup">
      <div class="place-popup__container">
      <button class="btn place-popup__btn-toggle-favorite"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" class="App-header__icon"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path></svg></button>
        <h2 class="place-popup__title">${name}</h2>
        <p>Адрес: ${address}</p>
        ${renderContentMedia()}
        ${renderDescription()}
        ${renderTask()}
      </div>
    </div>
  `);

  if (completePlace) {
    const { modalBoxContent } = modal;

    const taskForm = modalBoxContent.querySelector('.task__form');
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const userAnswer = formData.get('task-answer');

      if (userAnswer === rightAnswer) {
        form.classList.add('is-success');
        form.querySelector('.task__bonus-score-value').textContent = score;
        incrementUserScore({ score });
      }

      if (userAnswer !== rightAnswer) {
        form.classList.add('is-failed');
        form
          .querySelector(`.option[data-right-answer="${rightAnswer}"]`)
          .classList.add('is-success');
      }

      completePlace({ id });
    });

    const btnNext = modalBoxContent.querySelector('.task__btn-next');
    btnNext.addEventListener('click', (e) => {
      e.preventDefault();
      modal.close();
    });
  }

  modal.open();
};

export default createPlacePopup;
