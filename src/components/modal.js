function openPopup(popupItem) {
    popupItem.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupOnEscape);
}

function closePopup(popupItem) {
    popupItem.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupOnEscape);
}

function closePopupOnEscape(event) {
    if (event.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened');
        closePopup(popupOpened);
    }
}

function setEventListenerOnPopup() {
    const popupList = document.querySelectorAll('.popup');

    popupList.forEach(popupItem => {
        closePopupOnButtonClick(popupItem);
        closePopupOnOverlay(popupItem);
    })
}

function closePopupOnOverlay(popupItem) {
    popupItem.addEventListener('mousedown', (event) => {
        if (event.target.classList.contains('popup')) {
            closePopup(popupItem);
        }
    })
}

function closePopupOnButtonClick(popupItem) {
    const buttonClosePopup = popupItem.querySelector('.popup__close-button');
    buttonClosePopup.addEventListener('click', () => closePopup(popupItem));
}

export {
    openPopup, closePopup,
    setEventListenerOnPopup,
};