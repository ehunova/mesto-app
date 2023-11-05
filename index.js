const editProfileButton = document.querySelector('.profile__edit-button');
const editProfilePopup = document.querySelector('#edit-profile');
const closeProfilePopup = editProfilePopup.querySelector('.popup__close-button');
const saveProfilePopup = editProfilePopup.querySelector('.popup__form');

const nameProfile = document.querySelector('.profile__name-text');
const descriptionProfile = document.querySelector('.profile__description');

const addCardButton = document.querySelector('.profile__add-button');
const addCardPopup = document.querySelector('#add-card');
const closeAddCardPopup = addCardPopup.querySelector('.popup__close-button');


function openPopup(popupItem) {
    popupItem.classList.add('popup_opened');
}

function closePopup(popupItem) {
    popupItem.classList.remove('popup_opened');
}

function getUserInfo() {
    const nameProfileInput = saveProfilePopup.querySelector('#profile-name');
    const descriptionProfileInput = saveProfilePopup.querySelector('#description');

    nameProfileInput.value = nameProfile.textContent;
    descriptionProfileInput.value = descriptionProfile.textContent;
}

function updateUserInfo() {
    const nameProfileInput = saveProfilePopup.querySelector('#profile-name');
    const descriptionProfileInput = saveProfilePopup.querySelector('#description');

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

saveProfilePopup.addEventListener('submit', function(event) {
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