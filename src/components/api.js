const config = {
    baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-14',
    headers: {
        authorization: 'd3402cae-2088-4283-905e-98c5f4732bd5',
        'Content-Type': 'application/json'
    }
}

function getRequestUserInfo() {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'GET',
        headers: config.headers
    })
        .then(resolve => {
            if (resolve.ok) {
                return resolve.json();
            }
            return Promise.reject(`Ошибка: ${resolve.status}`);
        })
}

function patchRequestUserInfo(userInfo) {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
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
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
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
    return fetch(`${config.baseUrl}/cards`, {
        method: 'GET',
        headers: config.headers
    })
        .then(resolve => {
            if (resolve.ok) {
                return resolve.json();
            }
            return Promise.reject(`Ошибка: ${resolve.status}`);
        })
}

function postRequestCard(card) {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
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
    return fetch(`${config.baseUrl}/cards/${card._id}`, {
        method: 'DELETE',
        headers: config.headers,
        body: JSON.stringify(card)
    })
        .then(resolve => {
            if (resolve.ok) {
                return resolve.json();
            }
            return Promise.reject(`Ошибка: ${resolve.status}`);
        })
}

function putRequestLike(card) {
    return fetch(`${config.baseUrl}/cards/likes/${card._id}`, {
        method: 'PUT',
        headers: config.headers,
        body: JSON.stringify(card)
    })
        .then(resolve => {
            if (resolve.ok) {
                return resolve.json();
            }
            return Promise.reject(`Ошибка: ${resolve.status}`);
        })
}

function deleteRequestLike(card) {
    return fetch(`${config.baseUrl}/cards/likes/${card._id}`, {
        method: 'DELETE',
        headers: config.headers,
        body: JSON.stringify(card)
    })
        .then(resolve => {
            if (resolve.ok) {
                return resolve.json();
            }
            return Promise.reject(`Ошибка: ${resolve.status}`);
        })
}

export {
    getRequestUserInfo,
    patchRequestUserInfo,
    patchRequestUserAvatar,
    getRequestCards,
    postRequestCard,
    deleteRequestCard,
    putRequestLike,
    deleteRequestLike,
};