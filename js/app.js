/* Menu buttons */
const buttonNav = document.getElementById("nav-toggle")
const logIn = document.getElementById("log-in")
const modalToggle = document.getElementById("modal-toggle")
const modalScreen = document.getElementById("modal-screen")
const registerButton = document.getElementById("registerConfirm")
const cancelRegisterButton = document.getElementById("registerCancel")

/* Placeholder */
const placeholderName = document.getElementById("placeholderName")
const placeholderEmail = document.getElementById("placeholderEmail")
const placeholderPassword = document.getElementById("placeholderPassword")
const placeholderConfirmPassword = document.getElementById("placeholderConfirmPassword")

const userName = document.getElementById("userName")
const placeholderCount = document.getElementById("counter")
const modalItem = document.querySelectorAll(".modal__item")
const passwordContainer = document.querySelector(".password__container")
const userNameContainer = document.querySelector(".userName__container")
const emailContainer = document.querySelector(".email__container")

// reset button
const notifications = document.querySelectorAll(".notification")
const errors = document.querySelectorAll(".error")
const resetButtons = document.querySelectorAll(".reset__button")


let hasUpperCase = false
let hasNumber = false

/* Login menu */
// Apply / reset styles
function applyPlaceholderStyles(element) {
    element.style.transform = "translateY(-15px)";
    element.style.color = "wheat";
    element.style.fontSize = "15px";
}

function resetPlaceholderStyles(element) {
    element.style.transform = "";
    element.style.color = "";
    element.style.fontSize = "";
}

function resetLogin() {
    resetPlaceholderStyles(placeholderName)
    resetPlaceholderStyles(placeholderEmail)
    resetPlaceholderStyles(placeholderPassword)
    resetPlaceholderStyles(placeholderConfirmPassword)
    modalItem[1].style.border = "" /* ??? */
    notifications.forEach(element => element.textContent = "")
    errors.forEach(element => element.textContent = "")
    placeholderCount.textContent = ""
    modalItem.forEach(element => element.style.boxShadow = "")
    inputs.forEach(element => element.value = "")
}

function resetUserName() {
    resetPlaceholderStyles(placeholderName)
    modalItem[0].style.boxShadow = ""
    placeholderCount.textContent = ""
    loginNotification.textContent = "";
    userName.value = ""
}

function resetEmail() {
    resetPlaceholderStyles(placeholderEmail)
    modalItem[1].classList.remove("invalid")
    modalItem[1].style.boxShadow = "";
    modalItem[1].style.border = "";
    email.value = ""
    error.textContent = ""
}

function resetPassword() {
    resetPlaceholderStyles(placeholderPassword)
    password.value = ""
    modalItem[2].style.boxShadow = ""
    passwordNotification.textContent = ""
}

function resetConfirmPassword() {
    resetPlaceholderStyles(placeholderConfirmPassword)
    confirmPassword.value = ""
    modalItem[3].style.boxShadow = ""
    confirmPasswordNotification.textContent = ""
}

// User Name
function isUserNameValid(element) {
    if(element.value.length < 4 
    || element.value.length > 10) {
        return true
    } else {
        return false
    }
}

userName.onblur = function() {
    if (isUserNameValid(userName)) {
        userName.classList.add("login-notification")
        loginNotification.textContent = "Пожалуйста, введите от 4 до 10 символов"
    }
    if (userName.value.length === 0) {
        resetPlaceholderStyles(placeholderName)
        modalItem[0].style.boxShadow = ""
    }
    console.log('is user name valid?', isUserNameValid())
}

userName.onfocus = function() {
    if (userName.classList.contains("login-notification")) {
        userName.classList.remove("login-notification")
        loginNotification.textContent = ""
    }
    applyPlaceholderStyles(placeholderName)
    modalItem[0].style.boxShadow = "wheat 0 0 5px 1px";
}

if (resetButtons.length > 0) {
    resetButtons[0].addEventListener('click', function() {
        resetUserName()
    })
    resetButtons[1].addEventListener('click', function() {
        resetEmail()
    })
    resetButtons[2].addEventListener('click', function() {
        resetPassword()
    })
    resetButtons[3].addEventListener('click', function() {
        resetConfirmPassword()
    })
}

// User name counter
userName.oninput = function() {
    let count = userName.value.length
    placeholderCount.textContent = `${count}/10`
}

// Email
function isEmailValid() {
    if(email.value.includes("@")) {
        return true
    } else {
        return false
    }
}

email.onblur = function() {
    if (!isEmailValid()) {
        error.textContent = "Пожалуйста, введите правильный email."
        modalItem[1].classList.add("invalid")
    }
    if (email.value.length === 0) {
        resetPlaceholderStyles(placeholderEmail)
        modalItem[1].style.boxShadow = ""
        modalItem[1].style.border = ""
    }
}

email.onfocus = function() {
    if (modalItem[1].classList.contains("invalid")) {
        modalItem[1].classList.remove("invalid")
        error.textContent = ""
    }
    applyPlaceholderStyles(placeholderEmail)
    modalItem[1].style.boxShadow = "wheat 0 0 5px 1px";
    modalItem[1].style.border = "1px white solid";
}

// Password

function isPasswordValid() {
    if (password.value.length < 5 
        || password.value.length > 20 
        || !hasUpperCase 
        || !hasNumber) {
        return true
    } else {
        return false
    }
}

password.oninput = function() {
    hasNumber = false
    hasUpperCase = false

    for (let i = 0; i < password.value.length; i++) {
        if(password.value[i] !== password.value[i].toLowerCase()) {
            hasUpperCase = true;
            break;
        }
    }

    if(/\d/.test(password.value)) {
        hasNumber = true
    }
    console.log('validate password:', isPasswordValid())
}

password.onblur = function() {
    if (isPasswordValid()) {
        password.classList.add("password-notification")
        passwordNotification.textContent = "Пожалуйста, введите пароль"
    }
    if (password.value.length === 0) {
        resetPlaceholderStyles(placeholderPassword)
        modalItem[2].style.boxShadow = ""
    }
    /* Проверка на валидацию - Удалить */
    console.log('----------------------')
    console.log('!isUserNameValid():', !isUserNameValid())
    console.log('!isEmailValid():', !isEmailValid())
    console.log('!isPasswordValid():', !isPasswordValid())
    console.log('isPasswordMatch():', isPasswordMatch())
}

password.onfocus = function() {
    if (password.classList.contains("password-notification")) {
        password.classList.remove("password-notification")
        passwordNotification.textContent = ""
    }
    applyPlaceholderStyles(placeholderPassword)
    modalItem[2].style.boxShadow = "wheat 0 0 5px 1px";
}

// Confirm password
function isPasswordMatch() {
    if (confirmPassword.value === password.value) {
        return true
    } else {
        false
    }
}

confirmPassword.onblur = function() {
    if (confirmPassword.value.length === 0) {
        confirmPassword.classList.add("password-notification")
        confirmPasswordNotification.textContent = "Подтвердите пароль"
        resetPlaceholderStyles(placeholderConfirmPassword)
        modalItem[3].style.boxShadow = ""
    }
}

confirmPassword.onfocus = function() {
    if (confirmPassword.classList.contains("password-notification")) {
        confirmPassword.classList.remove("password-notification")
        confirmPasswordNotification.textContent = ""
    }
    applyPlaceholderStyles(placeholderConfirmPassword)
    modalItem[3].style.boxShadow = "wheat 0 0 5px 1px";
}

confirmPassword.oninput = function() {
    if(isPasswordMatch()) {
        confirmPassword.classList.add("password-notification")
        confirmPasswordNotification.textContent = "Пароль совпадает"
    } else {
        confirmPasswordNotification.textContent = ""
    }
}

// register button



/* Menu open */
buttonNav.addEventListener('click', function() {
    if(buttonNav.classList.contains("active")) {
        buttonNav.classList.remove("active")
    } else {
        buttonNav.classList.add("active")
    }
})

logIn.addEventListener('click', function() {
    if(modalScreen.classList.contains("active")) {
        modalScreen.classList.remove("active")
    } else {
        modalScreen.classList.add("active")
    }
})

cancelRegisterButton.addEventListener('click', function() {
    if(modalScreen.classList.contains("active")) {
        modalScreen.classList.remove("active")
    } else {
        modalScreen.classList.add("active")
    }
})

modalToggle.addEventListener('click', function() {
    if(modalScreen.classList.contains("active")) {
        modalScreen.classList.remove("active")
        resetLogin()
    } else {
        modalScreen.classList.add("active")
    }
})

registerButton.addEventListener('click', function() {
    if(!isUserNameValid(userName) && isEmailValid() && !isPasswordValid() && isPasswordMatch()) {
        localStorage.setItem('userName', userName.value)
        localStorage.setItem('email', email.value)
        localStorage.setItem('password', password.value)
    }
})


// New Email|login container
const replaceToLogin = document.getElementById("replaceToLogin")

function createNewEllement() {
    setTimeout(() => {
        const newModalContainer = document.createElement("div")
        const newLabel = document.createElement("label")
        const newInput = document.createElement("input")
        const newPlaceHolder = document.createElement("div")
        const newSpan = document.createElement("span")
        const newLoginNotification = document.createElement("div")
        modalGroup.insertBefore(newModalContainer, modalGroup.firstChild)
        newModalContainer.appendChild(newLabel)
        newModalContainer.appendChild(newLoginNotification)
        newLabel.appendChild(newInput)
        newLabel.appendChild(newPlaceHolder)
        newPlaceHolder.appendChild(newSpan)
        newModalContainer.classList.add("modal__container", "emailUsername__container")
        newLabel.classList.add("modal__item")
        newLoginNotification.classList.add("notification")
        newInput.classList.add("username")
        newInput.setAttribute("id", "emailUsername")
        newPlaceHolder.classList.add("modal__placeholder")
        newSpan.classList.add("span")
        newSpan.textContent = "Email / username"

        passwordContainer.style.display = "none"
        userNameContainer.style.display = "none"
        emailContainer.style.display = "none"

        const newEmailUsername = document.getElementById("emailUsername")

        newEmailUsername.onblur = function() {
            if (isUserNameValid(newEmailUsername)) {
                newEmailUsername.classList.add("login-notification")
                newLoginNotification.textContent = "Пожалуйста, введите user name либо email"
            }
            if (newEmailUsername.value.length === 0) {
                resetPlaceholderStyles(newPlaceHolder)
                modalItem[5].style.boxShadow = ""
            }
            console.log('is user name valid?', isUserNameValid())
        }

        newEmailUsername.onfocus = function() {
            if (newEmailUsername.classList.contains("login-notification")) {
                newEmailUsername.classList.remove("login-notification")
                newLoginNotification.textContent = ""
            }
            applyPlaceholderStyles(newPlaceHolder)
            modalItem[5].style.boxShadow = "wheat 0 0 5px 1px";
        }
    }, 100);
}


replaceToLogin.addEventListener('click', function() {
    const modalContainer = document.querySelectorAll(".modal__container")
    const emailUsernameContainer = document.querySelector(".emailUsername__container")

    if(modalContainer.length < 5) {
        createNewEllement()
    } else {
        passwordContainer.style.display = ""
        userNameContainer.style.display = ""
        emailContainer.style.display = ""
        emailUsernameContainer.remove()
    }
    console.log("modalContainer length", modalContainer.length)
})

// firstElementOfModalContainer.replaceWith(newLoginElement)
