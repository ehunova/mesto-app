import {deleteRequestCard, deleteRequestLike, putRequestLike} from "./api";

const cardTemplate = document.getElementById('card-template').content.querySelector('.card');

function createNewCard(card, onImagePlaceClicked, onButtonDeleteCardClicked, myId) {
    const newCard = cardTemplate.cloneNode(true);

    const namePlace = newCard.querySelector('.card__title');
    const imagePlace = newCard.querySelector('.card__image');
    const buttonDeleteCard = newCard.querySelector('.card__delete-button');
    const buttonLikeCard = newCard.querySelector('.card__like-button');
    const likeCounter = newCard.querySelector('.card__like-counter');

    namePlace.textContent = card.name;
    imagePlace.src = card.link;
    imagePlace.alt = card.name;
    likeCounter.textContent = card.likes.length;

    imagePlace.addEventListener('click', () => onImagePlaceClicked(card));

    if (card.likes.some(like => like._id === myId)) {
        buttonLikeCard.classList.add('card__like-button_active');
    }

    buttonLikeCard.addEventListener(
        'click',
        () => {
            if (buttonLikeCard.classList.contains('card__like-button_active')) {
                deleteRequestLike(card)
                    .then((result) => {
                        buttonLikeCard.classList.remove('card__like-button_active');
                        likeCounter.textContent = result.likes.length;
                    })
                    .catch(console.error)
            } else {
                putRequestLike(card)
                    .then((result) => {
                        buttonLikeCard.classList.add('card__like-button_active');
                        likeCounter.textContent = result.likes.length;
                    })
                    .catch(console.error)
            }
        }
    );

    if (card.owner._id !== myId) {
        buttonDeleteCard.remove();
    } else {
        buttonDeleteCard.addEventListener('click', (event) => {
            event.preventDefault();
            onButtonDeleteCardClicked((onSuccess) => {
                deleteRequestCard(card)
                    .then(() => {
                        onSuccess();
                        newCard.remove();
                    })
                    .catch(console.error);
            })
        });
    }

    return newCard;
}

export {createNewCard};


