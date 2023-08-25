//111111

// Получаем кнопку "Редактировать профиль"
const openButton = document.querySelector('.profile__edit-button');

// Получаем попап
const popup = document.querySelector('.popup');

// Получаем кнопку закрытия попапа
const closeButton = popup.querySelector('.popup__close');

// Получаем инпуты
const name = document.querySelector('#username');
const job = document.querySelector('#user-speciality');

// Функция для открытия попапа
function openPopup() {
    const profileName = document.querySelector('.profile__name');
    const profileSpeciality = document.querySelector('.profile__speciality');

    // Получите значение из атрибута textContent элементов profile__name и profile__speciality
    const nameValue = profileName.textContent;
    const jobValue = profileSpeciality.textContent;

    // Вставьте новые значения в инпуты
    nameInput.value = nameValue;
    jobInput.value = jobValue;

    popup.classList.add('popup_opened');
}

// Функция для закрытия попапа
function closePopup() {
    popup.classList.remove('popup_opened');
}

// Слушаем клик на кнопке "Редактировать профиль" и открываем попап
openButton.addEventListener('click', openPopup);

// Слушаем клик на кнопке закрытия попапа и закрываем его
closeButton.addEventListener('click', closePopup);





//111111(222222)

// Находим форму в DOM
const formElement = document.querySelector('.popup__form');

// Находим поля формы в DOM
const nameInput = document.querySelector('#username');
const jobInput = document.querySelector('#user-speciality');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет

// Получаем элементы, куда должны быть вставлены значения полей
const profileNameElement = document.querySelector('.profile__name');
const profileSpecialityElement = document.querySelector('.profile__speciality');


function handleFormSubmit(evt) {
  evt.preventDefault();

  // Получите значение полей jobInput и nameInput из свойства value
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  // Вставьте новые значения с помощью textContent
  profileNameElement.textContent = nameValue;
  profileSpecialityElement.textContent = jobValue;

  // Закройте попап после сохранения
  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit); 



//22222222222

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


//33333333333

// Получаем кнопку "добавить"
const addButton = document.querySelector('.profile__add-button');

// Получаем попап
const popupNew = document.querySelector('.popup_new-place');

// Получаем кнопку закрытия попапа
const closeNewButton = popupNew.querySelector('.popup__close');

// Получаем инпуты
const namePlace = document.querySelector('#new-place-name');
const imgUrl = document.querySelector('#new-place-url');

// Функция для открытия попапа
function openNewPopup() {
    

    popupNew.classList.add('popup_new-place_opened');

}

// Функция для закрытия попапа
function closeNewPopup() {
    popupNew.classList.remove('popup_new-place_opened');
}

// Слушаем клик на кнопке "Редактировать профиль" и открываем попап
addButton.addEventListener('click', openNewPopup);

// Слушаем клик на кнопке закрытия попапа и закрываем его
closeNewButton.addEventListener('click', closeNewPopup);




//4444444444444

// Получаем кнопку "принять"
const submitButton = document.querySelector('.popup__save_place');

// Контейнер, куда будут добавляться элементы
const itemsContainer = document.querySelector('.elements');

function addItem() {
  const nameInput = document.getElementById('new-place-name');
  const urlInput = document.getElementById('new-place-url');

  const templateContent = document.querySelector('#place-template').content.cloneNode(true);

  const elementHeading = templateContent.querySelector('.element__heading');
  const elementImage = templateContent.querySelector('.element__image');

  elementHeading.textContent = nameInput.value;
  elementImage.src = urlInput.value;
  
  event.preventDefault(); // отмена перезагрузки страницы
  itemsContainer.insertBefore(templateContent, itemsContainer.firstChild);
  closeNewPopup(); //функция закрытия
 
}

submitButton.addEventListener('click', addItem);




//55555555555555

