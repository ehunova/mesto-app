export function enableValidation(validationConfig) {
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));

    formList.forEach(formElement => {
        setEventListeners(formElement, validationConfig);
    })
}
function setEventListeners(formElement, validationConfig) {
    const inputFormList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonSubmit = formElement.querySelector(validationConfig.submitButtonSelector);
    toggleButtonState(inputFormList, buttonSubmit);

    inputFormList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            checkValidity(formElement, inputElement, validationConfig);
            toggleButtonState(inputFormList, buttonSubmit);
        })
    });
}

function hasInvalidInput(inputList) {
    return inputList.some(inputElement => {
        return !inputElement.validity.valid;
    })
}

function toggleButtonState(inputList, buttonElement) {
    if(hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
    } else {
        buttonElement.disabled = false;
    }
}

function checkValidity(formElement, inputElement, validationConfig) {
   if(!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);
    } else {
        hideInputError(formElement, inputElement, validationConfig);
    }
}

function showInputError(formElement, inputElement, textError, validationConfig) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(validationConfig.inputErrorClass);
    errorElement.textContent = textError;
}

function hideInputError(formElement, inputElement, validationConfig) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.textContent = '';
}