import './pages/index.css';

import {closePopup, openPopup, setEventListenerOnPopup,} from './components/modal.js';

import {createNewCard, formSaveCard, popupAddCard, updateCardsList} from './components/card.js';

import {enableValidation,} from './components/validate.js';

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inputErrorClass: 'popup__input_error',
}

const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const popupProfile = document.getElementById('edit-profile');
const formSaveProfile = popupProfile.querySelector('.popup__form');

const nameProfile = document.querySelector('.profile__name-text');
const descriptionProfile = document.querySelector('.profile__description');
const inputNameProfile = formSaveProfile.querySelector('#profile-name');
const inputDescriptionProfile = formSaveProfile.querySelector('#description');

const buttonAddCard = document.querySelector('.profile__add-button');

formSaveCard.addEventListener('submit', function (event) {
    event.preventDefault();
    updateCardsList();
    formSaveCard.reset();
    event.submitter.disabled = true;

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

buttonAddCard.addEventListener('click', function () {
    openPopup(popupAddCard);
});

setEventListenerOnPopup();
enableValidation(validationConfig);