function openPopup(popupItem) {
    popupItem.classList.add('popup_opened');
    document.addEventListener('keydown', (event) => {
        closePopupOnEscape(event, popupItem);
    });
}

function closePopup(popupItem) {
    popupItem.classList.remove('popup_opened');
    document.removeEventListener('keydown', (event) => {
        closePopupOnEscape(event, popupItem);
    });
}

function closePopupOnEscape(event, popupItem) {
    if (event.key === 'Escape') {
        closePopup(popupItem);
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