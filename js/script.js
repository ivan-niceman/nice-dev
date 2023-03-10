const popUp = document.querySelector('.popup');
const buttonQuestion = document.querySelector('.question__button');
const popUpInputs = popUp.querySelectorAll('.popup__input');
const popUpInputsError = popUp.querySelectorAll('.popup__input-error');

// функция открытия popup //

function openPopUp(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopUpKeyEsc);
}

// функция сброса ошибок //

// function resetErrors() {
//   popUpInputsError.forEach(error => {
//     error.textContent = '';
//   })
//   popUpInputs.forEach(elem => {
//     elem.classList.remove('popup__input_type_error');
//   })
// }

// функция закрытия popup //

function closePopUp(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopUpKeyEsc);
  // resetErrors();
}

// обработчик закрытия попапа //

  popUp.addEventListener('mousedown', evt => {
    if (evt.target === evt.currentTarget) {
      closePopUp(popUp);
    }
    if (evt.target.classList.contains('popup__button-close')) {
      closePopUp(popUp);
    }
    // if (evt.target.classList.contains('popup__button')) {
    //   closePopUp(popUp);
    // }
  })

// функция закрытия popup кнопкой esc //

function closePopUpKeyEsc(evt){
  if (evt.key === 'Escape') {
    const opendPopUp = document.querySelector('.popup_opened');
    closePopUp(opendPopUp);
  }
}

buttonQuestion.addEventListener('click', () => {
  openPopUp(popUp);
})

document.querySelectorAll('.nav-link').forEach( link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const transition = link.getAttribute('href');
    const transitionElement = document.querySelector(transition);
    transitionElement.scrollIntoView({ behavior: 'smooth' });
  });
});

