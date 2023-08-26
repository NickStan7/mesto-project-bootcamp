//111111

// Получаем кнопку "Редактировать профиль"
const openButton = document.querySelector(".profile__edit-button");

// Получаем попап
const popup = document.querySelector(".popup");

// Получаем кнопку закрытия попапа
const closeButton = popup.querySelector(".popup__close");

// Получаем инпуты
const name = document.querySelector("#username");
const job = document.querySelector("#user-speciality");

// Функция для открытия попапа
function openPopup() {
  const profileName = document.querySelector(".profile__name");
  const profileSpeciality = document.querySelector(".profile__speciality");

  // Получите значение из атрибута textContent элементов profile__name и profile__speciality
  const nameValue = profileName.textContent;
  const jobValue = profileSpeciality.textContent;

  // Вставьте новые значения в инпуты
  nameInput.value = nameValue;
  jobInput.value = jobValue;

  popup.classList.add("popup_opened");
}

// Функция для закрытия попапа
function closePopup() {
  popup.classList.remove("popup_opened");
}

// Слушаем клик на кнопке "Редактировать профиль" и открываем попап
openButton.addEventListener("click", openPopup);

// Слушаем клик на кнопке закрытия попапа и закрываем его
closeButton.addEventListener("click", closePopup);

//111111(222222)

// Находим форму в DOM
const formElement = document.querySelector(".popup__form");

// Находим поля формы в DOM
const nameInput = document.querySelector("#username");
const jobInput = document.querySelector("#user-speciality");
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет

// Получаем элементы, куда должны быть вставлены значения полей
const profileNameElement = document.querySelector(".profile__name");
const profileSpecialityElement = document.querySelector(".profile__speciality");

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

formElement.addEventListener("submit", handleFormSubmit);

//22222222222

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const elementsContainer = document.querySelector(".elements");

// Добавление карточки в контейнер
function addCard(name, link) {
  const cardTemplate = document.querySelector("#place-template").content;
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector(".element__heading").textContent = name;
  cardElement.querySelector(".element__image").src = link;
  cardElement.querySelector(".element__image").alt = name;

  const likeButton = cardElement.querySelector(".element__button");
  likeButton.addEventListener("click", toggleLike);

  const trashButton = cardElement.querySelector(".element__trash-button");
  trashButton.addEventListener("click", removeCard);

  elementsContainer.appendChild(cardElement);
}

// Обработчик для кнопки "Лайк"
function toggleLike(event) {
  const likeButton = event.target;
  likeButton.classList.toggle("element__button_theme_dark");
}

// Обработчик для кнопки "Удалить"
function removeCard(event) {
  const card = event.target.closest(".element");
  card.remove();
}

// Добавление карточек из массива initialCards
initialCards.forEach((card) => {
  addCard(card.name, card.link);
});

//33333333333

// Получаем кнопку "добавить"
const addButton = document.querySelector(".profile__add-button");

// Получаем попап
const popupNew = document.querySelector(".popup_new-place");

// Получаем кнопку закрытия попапа
const closeNewButton = popupNew.querySelector(".popup__close");

// Получаем инпуты
const namePlace = document.querySelector("#new-place-name");
const imgUrl = document.querySelector("#new-place-url");

// Функция для открытия попапа
function openNewPopup() {
  popupNew.classList.add("popup_new-place_opened");
}

// Функция для закрытия попапа
function closeNewPopup() {
  popupNew.classList.remove("popup_new-place_opened");
}

// Слушаем клик на кнопке "Редактировать профиль" и открываем попап
addButton.addEventListener("click", openNewPopup);

// Слушаем клик на кнопке закрытия попапа и закрываем его
closeNewButton.addEventListener("click", closeNewPopup);

//4444444444444

// Получаем кнопку "принять"
const submitButton = document.querySelector(".popup__save_place");

// Контейнер, куда будут добавляться элементы
const itemsContainer = document.querySelector(".elements");

function addItem() {
  const nameInput = document.getElementById("new-place-name");
  const urlInput = document.getElementById("new-place-url");

  const templateContent = document
    .querySelector("#place-template")
    .content.cloneNode(true);

  const elementHeading = templateContent.querySelector(".element__heading");
  const elementImage = templateContent.querySelector(".element__image");

  elementHeading.textContent = nameInput.value;
  elementImage.src = urlInput.value;

  event.preventDefault(); // отмена перезагрузки страницы
  itemsContainer.insertBefore(templateContent, itemsContainer.firstChild);

  const likeButtons = document.querySelectorAll(".element__button");

  function like() {
    const likeButton = event.target;
    likeButton.classList.toggle("element__button_theme_dark");
  }

  likeButtons.forEach((button) => {
    button.addEventListener("click", like);
  });

  //666666666

  // Получаем кнопку "удалить карточку"

  const trashButtons = document.querySelectorAll(".element__trash-button");

  function removeItem(event) {
    const button = event.target;
    const card = button.closest(".element"); // Находим ближайший элемент с классом .element
    if (card) {
      card.remove(); // Удаляем карточку
    }
  }

  // Добавляем обработчик события для каждой кнопки удаления
  trashButtons.forEach((button) => {
    button.addEventListener("click", removeItem);
  });

  closeNewPopup(); //функция закрытия
}

submitButton.addEventListener("click", addItem);

//55555555555555

const likeButtons = document.querySelectorAll(".element__button");

function like() {
  const likeButton = event.target;
  likeButton.classList.toggle("element__button_theme_dark");
}

likeButtons.forEach((button) => {
  button.addEventListener("click", like);
});

//666666666

// Получаем кнопку "удалить карточку"

const trashButtons = document.querySelectorAll(".element__trash-button");

function removeItem(event) {
  const button = event.target;
  const card = button.closest(".element"); // Находим ближайший элемент с классом .element
  if (card) {
    card.remove(); // Удаляем карточку
  }
}

// Добавляем обработчик события для каждой кнопки удаления
trashButtons.forEach((button) => {
  button.addEventListener("click", removeItem);
});

//777777777777

// Получаем изображение "добавить"
const clickImages = document.querySelectorAll(".element__image");

// Получаем изображение "subtitle"
const popupSubtitle = document.querySelectorAll(".popup__subtitle");
console.log(popupSubtitle);
// Получаем попап
const popupImage = document.querySelector(".popup_type_image");

// Получаем кнопку закрытия попапа
const closeImage = popupImage.querySelector(".popup__close-image");

// Получаем инпуты
const popupImageImg = popupImage.querySelector(".popup__image"); // Находим элемент <img> внутри попапа

// Функция для открытия попапа
function openImagePopup(event) {
  const clickedImage = event.target;
  const imageUrl = clickedImage.src;
  const imageAlt = clickedImage.alt;

  popupImageImg.src = imageUrl;

  popupSubtitle.forEach((subtitle) => {
    subtitle.textContent = imageAlt; // Устанавливаем текст для каждого элемента из коллекции
  });

  popupImage.classList.add("popup_type_image_opened");
}

clickImages.forEach((clickImage) => {
  clickImage.addEventListener("click", openImagePopup); // Добавляем слушатель для каждого изображения
});

// Функция для закрытия попапа
function closeImagePopup() {
  popupImage.classList.remove("popup_type_image_opened");
}

// Слушаем клик на кнопке закрытия попапа и закрываем его
closeImage.addEventListener("click", closeImagePopup);
