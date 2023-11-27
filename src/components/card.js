import {deleteRequestCard} from "./api";

const cardTemplate = document.getElementById('card-template').content.querySelector('.card');

function createNewCard(card, onImagePlaceClicked, onButtonDeleteCardClicked, myId) {
    const newCard = cardTemplate.cloneNode(true);

    const namePlace = newCard.querySelector('.card__title');
    const imagePlace = newCard.querySelector('.card__image');
    const buttonDeleteCard = newCard.querySelector('.card__delete-button');
    const buttonLikeCard = newCard.querySelector('.card__like-button');

    namePlace.textContent = card.name;
    imagePlace.src = card.link;
    imagePlace.alt = card.name;

    if(card.owner._id !== myId) {
        buttonDeleteCard.remove();
    }

    imagePlace.addEventListener('click', () => onImagePlaceClicked(card));

    buttonLikeCard.addEventListener(
        'click',
        () => buttonLikeCard.classList.toggle('card__like-button_active')
    );

    buttonDeleteCard.addEventListener('click', (event) => {
        event.preventDefault();
        onButtonDeleteCardClicked(() => {
            deleteRequestCard(card)
                .then(() => {
                    newCard.remove();
                })
                .catch((error) => console.error(error))
        })
    });

    return newCard;
}

export {createNewCard};


