// validators.js - Contains all regex validation functions

// ✅ Validate Email
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// ✅ Validate URL
function isValidURL(url) {
    const regex = /^https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}([\/\w.-]*)*\/?$/;
    return regex.test(url);
}

// ✅ Validate Phone Number
function isValidPhoneNumber(phone) {
    const regex = /^(\(\d{3}\)\s|\d{3}[-.])?\d{3}[-.]\d{4}$/;
    return regex.test(phone);
}

// ✅ Validate Time
function isValidTime(time) {
    const regex = /^\d{4}[-\s]\d{4}[-\s]\d{4}[-\s]\d{4}$/;
    return regex.test(time);
}

// Export functions for use in `app.js`
module.exports = { isValidEmail, isValidURL, isValidPhoneNumber, isValidTime };
