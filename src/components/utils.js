function checkResponse(resolve) {
    if (resolve.ok) {
        return resolve.json();
    }
    return Promise.reject(`Ошибка: ${resolve.status}`);
}

export {
    checkResponse,
}