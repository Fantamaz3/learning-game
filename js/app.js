/* Menu buttons */
const button = document.getElementById("nav-toggle")
const logIn = document.getElementById("log-in")
const modalScreen = document.getElementById("modal-screen")
const modalToggle = document.getElementById("modal-toggle")

/* Email */
// Email
email.onblur = function() {
    if (!email.value.includes("@")) {
        email.classList.add("invalid")
        error.innerHTML = "Пожалуйста, введите правильный email."
    }
}

email.onfocus = function() {
    if (email.classList.contains("invalid")) {
        email.classList.remove("invalid")
        error.innerHTML = ""
    }
}

// User Name
userName.onblur = function() {
    if (userName.value.length < 3 || userName.value.length > 10) {
        userName.classList.add("login-notification")
        loginNotification.innerHTML = "Пожалуйста, введите от 4 до 10 символов"
    }
}

userName.onfocus = function() {
    if (userName.classList.contains("login-notification")) {
        userName.classList.remove("login-notification")
        loginNotification.innerHTML = ""
    }
}

// Passvord

password.onblur = function() {
    if (password.value.length < 3 || password.value.length > 10) {
        password.classList.add("password-notification")
        passwordNotification.innerHTML = "Пожалуйста, введите от 4 до 10 символов"
    }
}

password.onfocus = function() {
    if (password.classList.contains("password-notification")) {
        passwod.classList.remove("password-notification")
        passwordNotification.innerHTML = ""
    }
}

/* Menu open */
button.addEventListener('click', function() {
    if(modalScreen.classList.contains("active")) {
        modalScreen.classList.remove("active")
    } else {
        modalScreen.classList.add("active")
    }
})

logIn.addEventListener('click', function() {
    if(modalScreen.classList.contains("active")) {
        modalScreen.classList.remove("active")
    } else {
        modalScreen.classList.add("active")
    }
})

modalToggle.addEventListener('click', function() {
    if(modalScreen.classList.contains("active")) {
        modalScreen.classList.remove("active")
    } else {
        modalScreen.classList.add("active")
    }
})