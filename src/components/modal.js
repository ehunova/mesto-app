function openPopup(popupItem) {
    popupItem.classList.add('popup_opened');

    popupItem.addEventListener('mousedown', (event) => {
        if (event.target.classList.contains('popup')) {
            closePopup(popupItem);
        }
    })
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

export {
    openPopup, closePopup,
    closePopupOnEscape,
};