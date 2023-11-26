import { openPopup } from './modal.js';

const popupAddCard = document.getElementById('add-card');
const formSaveCard = popupAddCard.querySelector('.popup__form');
const popupFullCard = document.getElementById('full-card');

const cardTemplate = document.getElementById('card-template').content.querySelector('.card');
const cardsBlock = document.querySelector('.cards__list');
const inputNamePlace = formSaveCard.querySelector('#card-name');
const inputLinkPlace = formSaveCard.querySelector('#card-link');

const cardsList = [
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

 function updateCardsList() {
    const card = {name: inputNamePlace.value, link: inputLinkPlace.value};

    addNewCard(createNewCard(card));
}

function createNewCard(card) {
    const newCard = cardTemplate.cloneNode(true);

    const namePlace = newCard.querySelector('.card__title');
    const imagePlace = newCard.querySelector('.card__image');
    const buttonDeleteCard = newCard.querySelector('.card__delete-button');
    const buttonLikeCard = newCard.querySelector('.card__like-button');

    const fullImagePlace = popupFullCard.querySelector('.popup__image');
    const fullNamePlace = popupFullCard.querySelector('.popup__caption');

    namePlace.textContent = card.name;
    imagePlace.src = card.link;
    imagePlace.alt = card.name;

    imagePlace.addEventListener('click', () => {
        fullImagePlace.src = card.link;
        fullImagePlace.alt = card.name;
        fullNamePlace.textContent = card.name;
        openPopup(popupFullCard);
    });

    buttonLikeCard.addEventListener('click', (event) => {
        event.target.closest('.card');
        buttonLikeCard.classList.toggle('card__like-button_active')
    });

    buttonDeleteCard.addEventListener('click', (event) => {
        event.target.closest('.card');
        newCard.remove();
    });

    return newCard;
}

function addNewCard(card) {
    cardsBlock.prepend(card);
}
cardsList.reverse().forEach(card => {
    addNewCard(createNewCard(card));
});

export {
    updateCardsList,
    popupAddCard, formSaveCard,
    popupFullCard,
}


