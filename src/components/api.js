import {cardsList} from "./cards";

function getRequestUserInfo() {
    return fetch('https://nomoreparties.co/v1/wbf-cohort-14/users/me', {
        method: 'GET',
        headers: {
            authorization: 'd3402cae-2088-4283-905e-98c5f4732bd5'
        }
    })
        .then(resolve => {
            if (resolve.ok) {
                return resolve.json();
            }
            return Promise.reject(`Ошибка: ${resolve.status}`);
        })
}

function patchRequestUserInfo(userInfo) {
    return fetch('https://nomoreparties.co/v1/wbf-cohort-14/users/me', {
        method: 'PATCH',
        headers: {
            authorization: 'd3402cae-2088-4283-905e-98c5f4732bd5',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    })
        .then(resolve => {
            if (resolve.ok) {
                return resolve.json();
            }
            return Promise.reject(`Ошибка: ${resolve.status}`);
        })
}

function patchRequestUserAvatar(userInfo) {
    return fetch('https://nomoreparties.co/v1/wbf-cohort-14/users/me/avatar', {
        method: 'PATCH',
        headers: {
            authorization: 'd3402cae-2088-4283-905e-98c5f4732bd5',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    })
        .then(resolve => {
            if (resolve.ok) {
                return resolve.json();
            }
            return Promise.reject(`Ошибка: ${resolve.status}`);
        })
}

function getRequestCards() {
    return fetch('https://nomoreparties.co/v1/wbf-cohort-14/cards', {
        method: 'GET',
        headers: {
            authorization: 'd3402cae-2088-4283-905e-98c5f4732bd5'
        }
    })
        .then(resolve => {
            if (resolve.ok) {
                return resolve.json();
            }
            return Promise.reject(`Ошибка: ${resolve.status}`);
        })
}

function postRequestCard(card) {
    return fetch('https://nomoreparties.co/v1/wbf-cohort-14/cards', {
        method: 'POST',
        headers: {
            authorization: 'd3402cae-2088-4283-905e-98c5f4732bd5',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(card)
    })
        .then(resolve => {
            if (resolve.ok) {
                return resolve.json();
            }
            return Promise.reject(`Ошибка: ${resolve.status}`);
        })
}

function deleteRequestCard(card) {
    return fetch(`https://nomoreparties.co/v1/wbf-cohort-14/cards/${card._id}`, {
        method: 'DELETE',
        headers: {
            authorization: 'd3402cae-2088-4283-905e-98c5f4732bd5',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(card)
    })
}

export {
    getRequestUserInfo,
    patchRequestUserInfo,
    patchRequestUserAvatar,
    getRequestCards,
    postRequestCard,
    deleteRequestCard,

}