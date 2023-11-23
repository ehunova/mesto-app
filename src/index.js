import './pages/index.css';

import {
    openPopup, closePopup,
    closePopupOnEscape, setEventListenerOnPopup,
} from './components/modal.js';

import {
    updateCardsList, buttonClosePopupAddCard,
    popupAddCard, popupFullCard, formSaveCard
} from './components/card.js';

import {
    enableValidation,
} from './components/validate.js';

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inputErrorClass: 'popup__input_error',
}

const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const popupProfile = document.getElementById('edit-profile');
const buttonClosePopupProfile = popupProfile.querySelector('.popup__close-button');
const formSaveProfile = popupProfile.querySelector('.popup__form');

const nameProfile = document.querySelector('.profile__name-text');
const descriptionProfile = document.querySelector('.profile__description');
const inputNameProfile = formSaveProfile.querySelector('#profile-name');
const inputDescriptionProfile = formSaveProfile.querySelector('#description');

const buttonAddCard = document.querySelector('.profile__add-button');
const buttonClosePopupFullCard = popupFullCard.querySelector('.popup__close-button');

formSaveCard.addEventListener('submit', function (event) {
    event.preventDefault();
    updateCardsList();
    formSaveCard.reset();

    const buttonElement = formSaveCard.querySelector(validationConfig.submitButtonSelector);
    buttonElement.disabled = true;


    closePopup(popupAddCard);
});

formSaveProfile.addEventListener('submit', function (event) {
    event.preventDefault();
    updateProfile();
    closePopup(popupProfile);
});

function fillFormSaveProfile() {
    inputNameProfile.value = nameProfile.textContent;
    inputDescriptionProfile.value = descriptionProfile.textContent;
}

function updateProfile() {
    nameProfile.textContent = inputNameProfile.value;
    descriptionProfile.textContent = inputDescriptionProfile.value;
}

buttonOpenPopupProfile.addEventListener('click', function () {
    fillFormSaveProfile();
    openPopup(popupProfile);
});

buttonClosePopupProfile.addEventListener('click', function () {
    closePopup(popupProfile);
});

buttonAddCard.addEventListener('click', function () {
    openPopup(popupAddCard);
});

buttonClosePopupAddCard.addEventListener('click', function () {
    closePopup(popupAddCard);
});

buttonClosePopupFullCard.addEventListener('click', (event) => {
    event.target.closest('.card');
    closePopup(popupFullCard);
});

document.addEventListener('keydown', closePopupOnEscape);

setEventListenerOnPopup();
enableValidation(validationConfig);