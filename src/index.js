import './pages/index.css';

import {closePopup, openPopup, setEventListenerOnPopup,} from './components/modal.js';

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

const popupConfirm = document.getElementById('confirm');
const formConfirm = popupConfirm.querySelector('.popup__form');

const popupProfileAvatar = document.getElementById('profile-avatar');
const formSaveProfileAvatar = popupProfileAvatar.querySelector('.popup__form');
const buttonOpenPopupAvatar = document.querySelector('.profile__avatar_edit-button');
const avatarProfile = document.querySelector('.profile__avatar');

formSaveCard.addEventListener('submit', function (event) {
    event.preventDefault();

    const card = {name: inputNamePlace.value, link: inputLinkPlace.value};
    addNewCard(card);

    formSaveCard.reset();
    event.submitter.disabled = true;

    closePopup(popupAddCard);
});

formSaveProfile.addEventListener('submit', function (event) {
    event.preventDefault();
    nameProfile.textContent = inputNameProfile.value;
    descriptionProfile.textContent = inputDescriptionProfile.value;

    closePopup(popupProfile);
});

formSaveProfileAvatar.addEventListener('submit', function (event) {
    event.preventDefault();
    avatarProfile.src = this.elements.imageUrl.value;
    this.reset();

    closePopup(popupProfileAvatar);
})

function fillFormSaveProfile() {
    inputNameProfile.value = nameProfile.textContent;
    inputDescriptionProfile.value = descriptionProfile.textContent;
}

buttonOpenPopupProfile.addEventListener('click', function () {
    fillFormSaveProfile();
    openPopup(popupProfile);
});

buttonOpenPopupAvatar.addEventListener('click', () => openPopup(popupProfileAvatar));

buttonAddCard.addEventListener('click', () => openPopup(popupAddCard));

cardsList.reverse().forEach(card => {
    addNewCard(card);
});

function addNewCard(card) {
    cardsBlock.prepend(
        createNewCard(card, openPopupFullCard, openPopupConfirm)
    );
}

function openPopupFullCard(card) {
    fullImagePlace.src = card.link;
    fullImagePlace.alt = card.name;
    fullNamePlace.textContent = card.name;

    openPopup(popupFullCard);
}

function openPopupConfirm(onConfirm) {
    const confirmInput = formConfirm.querySelector('.popup__save-button');
    openPopup(popupConfirm);
    setTimeout(() => confirmInput.focus(), 100);

    formConfirm.onsubmit = (event) => {
        event.preventDefault();
        onConfirm();
        closePopup(popupConfirm);
    };
}

setEventListenerOnPopup();
enableValidation(validationConfig);