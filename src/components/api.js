import {checkResponse} from "./utils";

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
        .then(checkResponse)
}

function patchRequestUserInfo(userInfo) {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify(userInfo)
    })
        .then(checkResponse)
}

function patchRequestUserAvatar(userInfo) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify(userInfo)
    })
        .then(checkResponse)
}

function getRequestCards() {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'GET',
        headers: config.headers
    })
        .then(checkResponse)
}

function postRequestCard(card) {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify(card)
    })
        .then(checkResponse)
}

function deleteRequestCard(card) {
    return fetch(`${config.baseUrl}/cards/${card._id}`, {
        method: 'DELETE',
        headers: config.headers,
        body: JSON.stringify(card)
    })
        .then(checkResponse)
}

function putRequestLike(card) {
    return fetch(`${config.baseUrl}/cards/likes/${card._id}`, {
        method: 'PUT',
        headers: config.headers,
        body: JSON.stringify(card)
    })
        .then(checkResponse)
}

function deleteRequestLike(card) {
    return fetch(`${config.baseUrl}/cards/likes/${card._id}`, {
        method: 'DELETE',
        headers: config.headers,
        body: JSON.stringify(card)
    })
        .then(checkResponse)
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