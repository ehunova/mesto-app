import './pages/index.css';

import {closePopup, openPopup, setEventListenerOnPopup,} from './components/modal.js';

import {createNewCard} from './components/card.js';

import {enableValidation} from './components/validate.js';

import {
    getRequestCards,
    getRequestUserInfo,
    patchRequestUserAvatar,
    patchRequestUserInfo,
    postRequestCard,
} from './components/api.js';

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

const popupFullCard = document.getElementById('full-card');
const fullImagePlace = popupFullCard.querySelector('.popup__image');
const fullNamePlace = popupFullCard.querySelector('.popup__caption');

const popupConfirm = document.getElementById('confirm');
const formConfirm = popupConfirm.querySelector('.popup__form');
const buttonConfirm = formConfirm.querySelector('.popup__save-button');

const popupProfileAvatar = document.getElementById('profile-avatar');
const formSaveProfileAvatar = popupProfileAvatar.querySelector('.popup__form');
const buttonOpenPopupAvatar = document.querySelector('.profile__avatar_edit-button');
const avatarProfile = document.querySelector('.profile__avatar');

let globalUserInfo = {};
let globalCardsList = [];

function loadUserInfo() {
    getRequestUserInfo()
        .then(userInfo => {
            globalUserInfo = userInfo;
            nameProfile.textContent = userInfo.name;
            descriptionProfile.textContent = userInfo.about;
            avatarProfile.src = userInfo.avatar;
        })
        .catch((error) => {
            console.error(error);
        })
}

function loadCardsList() {
    getRequestCards()
        .then(cardsList => {
            globalCardsList = cardsList;
            cardsList.reverse().forEach(card => {
                addNewCard(card);
            });
        })
        .catch((error) => {
            console.error(error);
        })
}

function renderLoading(isLoading, element) {
    element.textContent = 'Сохранить';

    if (isLoading) {
        element.textContent = 'Сохраняем...';
        element.disabled = true;
    }
}

formSaveCard.addEventListener('submit', function (event) {
    event.preventDefault();
    renderLoading(true, event.submitter);

    postRequestCard({
        name: event.target.elements.title.value,
        link: event.target.elements.link.value
    })
        .then((card) => {
            addNewCard(card);
            event.target.reset();
            event.submitter.disabled = true;
            closePopup(popupAddCard);
        })
        .catch((error) => {
            console.error(error);
            event.submitter.disabled = false;
        })
        .finally(() => {
            renderLoading(false, event.submitter);
        })
});

formSaveProfile.addEventListener('submit', function (event) {
    event.preventDefault();
    renderLoading(true, event.submitter);

    patchRequestUserInfo( {
        name: event.target.elements.name.value,
        about: event.target.elements.description.value
    })
        .then((userInfo) => {
            nameProfile.textContent = userInfo.name;
            descriptionProfile.textContent = userInfo.about;
            closePopup(popupProfile);
        })
        .catch((error) => {
            console.error(error);
            event.submitter.disabled = false;
        })
        .finally(() => {
            renderLoading(false, event.submitter);
        })
});

formSaveProfileAvatar.addEventListener('submit', function (event) {
    event.preventDefault();
    renderLoading(true, event.submitter);

    patchRequestUserAvatar({
        avatar: event.target.elements.imageUrl.value
    })
        .then((userInfo) => {
            avatarProfile.src = userInfo.avatar;
            event.target.reset();
            event.submitter.disabled = true;
            closePopup(popupProfileAvatar);
        })
        .catch((error) => {
            console.error(error);
            event.submitter.disabled = false;
        })
        .finally(() => {
            renderLoading(false, event.submitter);
        })
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

function addNewCard(card) {
    cardsBlock.prepend(
        createNewCard(card, openPopupFullCard, openPopupConfirm, globalUserInfo._id)
    );
}

function openPopupFullCard(card) {
    fullImagePlace.src = card.link;
    fullImagePlace.alt = card.name;
    fullNamePlace.textContent = card.name;

    openPopup(popupFullCard);
}

function openPopupConfirm(onConfirm) {
    openPopup(popupConfirm);
    setTimeout(() => buttonConfirm.focus(), 100);

    formConfirm.onsubmit = (event) => {
        event.preventDefault();
        onConfirm();
        closePopup(popupConfirm);
    };
}

loadUserInfo();
loadCardsList();
setEventListenerOnPopup();
enableValidation(validationConfig);