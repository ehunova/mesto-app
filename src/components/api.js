function getRequestUserInfo() {
    return fetch('https://nomoreparties.co/v1/wbf-cohort-14/users/me', {
        method: 'GET',
        headers: {
            authorization: 'd3402cae-2088-4283-905e-98c5f4732bd5'
        }
    })
        .then(resolve => resolve.json())
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
}


export {
    getRequestUserInfo,
    patchRequestUserInfo,
    patchRequestUserAvatar,
}