const editProfileButton = document.querySelector('.profile__edit-button');
const editProfilePopup = document.getElementById('edit-profile');
const closeProfilePopup = editProfilePopup.querySelector('.popup__close-button');
const saveProfileForm = editProfilePopup.querySelector('.popup__form');

const nameProfile = document.querySelector('.profile__name-text');
const descriptionProfile = document.querySelector('.profile__description');

const addCardButton = document.querySelector('.profile__add-button');
const addCardPopup = document.getElementById('add-card');
const closeAddCardPopup = addCardPopup.querySelector('.popup__close-button');
const saveCardForm = addCardPopup.querySelector('.popup__form');

const cardTemplate = document.getElementById('card-template').content.querySelector('.card');
const cardsBlock = document.querySelector('.cards__list');

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
    const namePlaceInput = saveCardForm.querySelector('#card-name');
    const linkPlaceInput = saveCardForm.querySelector('#card-link');
    const card = {name: namePlaceInput.value, link: linkPlaceInput.value};

    addNewCard(createNewCard(card));
}

function createNewCard(card) {
    const newCard = cardTemplate.cloneNode(true);

    const namePlace = newCard.querySelector('.card__title');
    const imagePlace = newCard.querySelector('.card__image');
    const deleteCard = newCard.querySelector('.card__delete-button');
    const likeCard = newCard.querySelector('.card__like-button');

    namePlace.textContent = card.name;
    imagePlace.src = card.link;

    imagePlace.addEventListener('click', function() {
        openPopup();
    });

    likeCard.addEventListener('click', () => likeCard.classList.toggle('card__like-button_active'));

    deleteCard.addEventListener('click', () => newCard.remove());

    return newCard;
}

function addNewCard(card) {
    cardsBlock.prepend(card);
}

cardsList.reverse().forEach(card => {
    addNewCard(createNewCard(card));
});

saveCardForm.addEventListener('submit', function (event) {
    event.preventDefault();
    updateCardsList();
    saveCardForm.reset();

    closePopup(addCardPopup);
});

function openPopup(popupItem) {
    popupItem.classList.add('popup_opened');
}

function closePopup(popupItem) {
    popupItem.classList.remove('popup_opened');
}

function getUserInfo() {
    const nameProfileInput = saveProfileForm.querySelector('#profile-name');
    const descriptionProfileInput = saveProfileForm.querySelector('#description');

    nameProfileInput.value = nameProfile.textContent;
    descriptionProfileInput.value = descriptionProfile.textContent;
}

function updateUserInfo() {
    const nameProfileInput = saveProfileForm.querySelector('#profile-name');
    const descriptionProfileInput = saveProfileForm.querySelector('#description');

    nameProfile.textContent = nameProfileInput.value;
    descriptionProfile.textContent = descriptionProfileInput.value;
}

editProfileButton.addEventListener('click', function () {
    getUserInfo();
    openPopup(editProfilePopup);
});

closeProfilePopup.addEventListener('click', function () {
    closePopup(editProfilePopup);
});

saveProfileForm.addEventListener('submit', function (event) {
    event.preventDefault();
    updateUserInfo();
    closePopup(editProfilePopup);
});

addCardButton.addEventListener('click', function () {
    openPopup(addCardPopup);
});

closeAddCardPopup.addEventListener('click', function () {
    closePopup(addCardPopup);
});