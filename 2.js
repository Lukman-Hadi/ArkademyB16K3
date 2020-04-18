function ValidateUsername(username) {
    let usernameRegex = /^[@].{2,12}$/gm;
    if (username.match(usernameRegex)) {
        return true;
    }else {
        return false;
    }
}
function ValidatePassword(password) {
    let passwordRegex = /^^[0-9]{6}$/;
    if (password.match(passwordRegex)) {
        return true;
    }else {
        return false;
    }
}

console.log(ValidateUsername("@koders"));
console.log(ValidateUsername("@programmerhandal"));
console.log(ValidatePassword("212223"));
console.log(ValidatePassword("2!2a3B"));