// Function to check if a password is valid
function isValidPassword(password) {
    //if statement to check password has at least 8 characters
    if (password.length < 8) {
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    if (!/[a-z]/.test(password)) {
        return false;
    }
    return true;
}

//Display input
function displayMessage(message) {
    document.getElementById("message").innerText = message;
}

//Created Form Variables To Functions & If Statements for valid input
function validateForm() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const password = document.getElementById("password").value;

    if (firstName === '' || lastName === '') {
        displayMessage("Please enter both first name and last name.");
    } else if (!isValidPassword(password)) {
        displayMessage("Invalid password! Password should have at least 8 characters, one uppercase letter, and one lowercase letter.");
    } else {
        displayMessage("All fields are valid!");
    }
}


document.getElementById("checkButton").addEventListener("click", validateForm);