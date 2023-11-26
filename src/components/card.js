const cardTemplate = document.getElementById('card-template').content.querySelector('.card');

function createNewCard(card, openPopupFullCard) {
    const newCard = cardTemplate.cloneNode(true);

    const namePlace = newCard.querySelector('.card__title');
    const imagePlace = newCard.querySelector('.card__image');
    const buttonDeleteCard = newCard.querySelector('.card__delete-button');
    const buttonLikeCard = newCard.querySelector('.card__like-button');

    namePlace.textContent = card.name;
    imagePlace.src = card.link;
    imagePlace.alt = card.name;

    imagePlace.addEventListener('click', () => {
        openPopupFullCard(card);
    });

    buttonLikeCard.addEventListener('click', (event) => {
        buttonLikeCard.classList.toggle('card__like-button_active')
    });

    buttonDeleteCard.addEventListener('click', (event) => {
        newCard.remove();
    });

    return newCard;
}

export {createNewCard}


