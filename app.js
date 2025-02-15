// app.js - Test regex functions from validators.js
const { isValidEmail, isValidURL, isValidPhoneNumber, isValidTime } = require("./validators");

// Test Cases
console.log("Email Tests:");
console.log(isValidEmail("user@example.com"));  // ✅ true
console.log(isValidEmail("user@.com"));  // ❌ false
console.log(isValidEmail("firstname.lastname@company.co.uk"));  // ✅ true
console.log(isValidEmail("firstname.lastname@.uk"));  // ❌ false

console.log("\nURL Tests:");
console.log(isValidURL("https://www.example.com"));  // ✅ true
console.log(isValidURL("www.example.com"));  // ❌ false
console.log(isValidURL("https://subdomain.example.org/page"));  // ✅ true
console.log(isValidURL("https://example/page"));  // ❌ false

console.log("\nPhone Number Tests:");
console.log(isValidPhoneNumber("(123) 456-7890"));  // ✅ true
console.log(isValidPhoneNumber("123-456-7890"));  // ✅ true
console.log(isValidPhoneNumber("123.456.7890"));  // ✅ true
console.log(isValidPhoneNumber("1234567890"));  // ❌ false

console.log("\nTime Tests:");
console.log(isValidTime("23.00"));  // ✅ true
console.log(isValidTime("11.00"));  // ❌ false
