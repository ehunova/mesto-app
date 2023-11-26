import './pages/index.css';

import {
    closePopup, openPopup,
    setEventListenerOnPopup,
} from './components/modal.js';

import {createNewCard} from './components/card.js';

import {enableValidation} from './components/validate.js';

import {cardsList} from './components/cards.js';

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

const popupAddCard = document.getElementById('add-card');
const formSaveCard = popupAddCard.querySelector('.popup__form');
const cardsBlock = document.querySelector('.cards__list');
const inputNamePlace = formSaveCard.querySelector('#card-name');
const inputLinkPlace = formSaveCard.querySelector('#card-link');

const popupFullCard = document.getElementById('full-card');
const fullImagePlace = popupFullCard.querySelector('.popup__image');
const fullNamePlace = popupFullCard.querySelector('.popup__caption');

formSaveCard.addEventListener('submit', function (event) {
    event.preventDefault();

    const card = {name: inputNamePlace.value, link: inputLinkPlace.value};
    addNewCard(createNewCard(card, openPopupFullCard));

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

function addNewCard(card) {
    cardsBlock.prepend(card);
}
cardsList.reverse().forEach(card => {
    addNewCard(createNewCard(card, openPopupFullCard));
});

function openPopupFullCard(card) {
    fullImagePlace.src = card.link;
    fullImagePlace.alt = card.name;
    fullNamePlace.textContent = card.name;

    openPopup(popupFullCard);
}

setEventListenerOnPopup();
enableValidation(validationConfig);