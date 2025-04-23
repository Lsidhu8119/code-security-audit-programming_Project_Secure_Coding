document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    clearErrors(); // this clears previous errors
    let hasError = false; 

    // Get values from the form fields
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const languageSelected = document.querySelector('input[name="language"]:checked');
    const proficiencyChecked = document.querySelectorAll('input[name="proficiency"]:checked');
    const experience = document.getElementById('experience').value;
    const startdate = document.getElementById('startdate').value;

    // Each Field Is validated
    if (name.trim() === '') {
        showError('nameError', 'Please Enter Your Full Name.');
        hasError = true;
    }
    
    // Username validation is added (alphanumeric, 3-15 characters)
    const usernamePattern = /^[a-zA-Z0-9]{3,15}$/;
    if (username.trim() === '') {
        showError('usernameError', 'Please enter a username.');
        hasError = true;
    } else if (!usernamePattern.test(username)) {
        showError('usernameError', 'Username must be 3-15 characters long and contain only letters and numbers.');
        hasError = true;
    }

    if (email.trim() === '') {
        showError('emailError', 'Please enter your email address.'); 
        hasError = true;
    } else if (!validateEmail(email)) {
        showError('emailError', 'Please enter a valid email address.'); 
        hasError = true;
    }

    if (!languageSelected) {
        showError('languageError', 'Please select a programming language that you like.'); 
        hasError = true;
    }

    if (proficiencyChecked.length === 0) {
        showError('proficiencyError', 'Please select at least one programming skill you are good at.');
        hasError = true;
    }

    if (experience.trim() === '') {
        showError('experienceError', 'Please add your years of experience in Programming.'); 
        hasError = true;
    } else if (experience < 0 || experience > 50) {
        showError('experienceError', 'Please enter a valid number of years from 0-50.');
        hasError = true;
    }

    if (startdate === '') {
        showError('dateError', 'Please select a starting date.'); 
        hasError = true;
    }

    // If no errors are found, submit the form
    if (!hasError) {
        this.submit(); 
    }
});

// Function to display error messages
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message; // Set error message
}

// Function to clear all error messages
function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function(error) {
        error.textContent = ''; // Clear the text content of each error element
    });
}

// Function to validate the email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
    return re.test(String(email).toLowerCase()); 
}
