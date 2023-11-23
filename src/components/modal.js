function openPopup(popupItem) {
    popupItem.classList.add('popup_opened');
}

function closePopup(popupItem) {
    popupItem.classList.remove('popup_opened');
}

function closePopupOnEscape(event) {
    if (event.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

function setEventListenerOnPopup() {
    const popupList = Array.from(document.querySelectorAll('.popup'));

    popupList.forEach(popupItem => {
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

export {
    openPopup, closePopup,
    closePopupOnEscape, setEventListenerOnPopup,
};