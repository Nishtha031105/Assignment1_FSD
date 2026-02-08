function validateForm() {
    clearAllErrors();
    
    let isValid = true;
    
    isValid = validateFirstName() && isValid;
    isValid = validateLastName() && isValid;
    isValid = validateDOB() && isValid;
    isValid = validateGender() && isValid;
    isValid = validateNationality() && isValid;
    
    isValid = validateEmail() && isValid;
    isValid = validatePhone() && isValid;
    isValid = validateAddress() && isValid;
    isValid = validateCity() && isValid;
    isValid = validateState() && isValid;
    isValid = validatePincode() && isValid;
    
    isValid = validateCourse() && isValid;
    isValid = validateAdmissionYear() && isValid;
    isValid = validatePreviousSchool() && isValid;
    isValid = validatePercentage() && isValid;
    isValid = validatePassingYear() && isValid;
    isValid = validateBoard() && isValid;
    
    isValid = validateFatherName() && isValid;
    isValid = validateFatherPhone() && isValid;
    isValid = validateMotherName() && isValid;
    isValid = validateAnnualIncome() && isValid;
    
    isValid = validateWhyJoin() && isValid;
    
    isValid = validateTerms() && isValid;
    
    if (isValid) {
        alert("✅ Form submitted successfully!\n\nThank you for your application. You will receive a confirmation email shortly.");
        return true;
    } else {
        alert("❌ Please correct the errors in the form before submitting.");
        scrollToFirstError();
        return false;
    }
}

function validateFirstName() {
    const firstName = document.getElementById("firstName").value.trim();
    const errorElement = document.getElementById("firstNameError");
    const inputElement = document.getElementById("firstName");
    
    if (firstName === "") {
        showError(inputElement, errorElement, "First name is required");
        return false;
    }
    
    if (firstName.length < 2) {
        showError(inputElement, errorElement, "First name must be at least 2 characters long");
        return false;
    }
    
    if (!isValidName(firstName)) {
        showError(inputElement, errorElement, "First name should contain only letters");
        return false;
    }
    
    clearError(inputElement, errorElement);
    return true;
}

function validateLastName() {
    const lastName = document.getElementById("lastName").value.trim();
    const errorElement = document.getElementById("lastNameError");
    const inputElement = document.getElementById("lastName");
    
    if (lastName === "") {
        showError(inputElement, errorElement, "Last name is required");
        return false;
    }
    
    if (lastName.length < 2) {
        showError(inputElement, errorElement, "Last name must be at least 2 characters long");
        return false;
    }
    
    if (!isValidName(lastName)) {
        showError(inputElement, errorElement, "Last name should contain only letters");
        return false;
    }
    
    clearError(inputElement, errorElement);
    return true;
}

function validateDOB() {
    const dob = document.getElementById("dob").value;
    const errorElement = document.getElementById("dobError");
    const inputElement = document.getElementById("dob");
    
    if (dob === "") {
        showError(inputElement, errorElement, "Date of birth is required");
        return false;
    }
    
    const dobDate = new Date(dob);
    const minDate = new Date("1990-01-01");
    const maxDate = new Date("2010-12-31");
    
    if (dobDate < minDate || dobDate > maxDate) {
        showError(inputElement, errorElement, "Date of birth must be between 01/01/1990 and 31/12/2005");
        return false;
    }
    
    clearError(inputElement, errorElement);
    return true;
}

function validateGender() {
    const genderRadios = document.getElementsByName("gender");
    const errorElement = document.getElementById("genderError");
    let isSelected = false;
    
    for (let i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            isSelected = true;
            break;
        }
    }
    
    if (!isSelected) {
        showError(null, errorElement, "Please select your gender");
        return false;
    }
    
    clearError(null, errorElement);
    return true;
}

function validateNationality() {
    const nationality = document.getElementById("nationality").value;
    const errorElement = document.getElementById("nationalityError");
    const inputElement = document.getElementById("nationality");
    
    if (nationality === "") {
        showError(inputElement, errorElement, "Please select your nationality");
        return false;
    }
    
    clearError(inputElement, errorElement);
    return true;
}

function validateEmail() {
    const email = document.getElementById("email").value.trim();
    const errorElement = document.getElementById("emailError");
    const inputElement = document.getElementById("email");
    
    if (email === "") {
        showError(inputElement, errorElement, "Email address is required");
        return false;
    }
    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailPattern.test(email)) {
        showError(inputElement, errorElement, "Please enter a valid email address");
        return false;
    }
    
    clearError(inputElement, errorElement);
    return true;
}

function validatePhone() {
    const phone = document.getElementById("phone").value.trim();
    const errorElement = document.getElementById("phoneError");
    const inputElement = document.getElementById("phone");
    
    if (phone === "") {
        showError(inputElement, errorElement, "Phone number is required");
        return false;
    }
    
    const phonePattern = /^[0-9]{10}$/;
    
    if (!phonePattern.test(phone)) {
        showError(inputElement, errorElement, "Phone number must be exactly 10 digits");
        return false;
    }
    
    if (phone[0] < '6') {
        showError(inputElement, errorElement, "Please enter a valid mobile number");
        return false;
    }
    
    clearError(inputElement, errorElement);
    return true;
}

function validateAddress() {
    const address = document.getElementById("address").value.trim();
    const errorElement = document.getElementById("addressError");
    const inputElement = document.getElementById("address");
    
    if (address === "") {
        showError(inputElement, errorElement, "Address is required");
        return false;
    }
    
    if (address.length < 10) {
        showError(inputElement, errorElement, "Address must be at least 10 characters long");
        return false;
    }
    
    clearError(inputElement, errorElement);
    return true;
}

function validateCity() {
    const city = document.getElementById("city").value.trim();
    const errorElement = document.getElementById("cityError");
    const inputElement = document.getElementById("city");
    
    if (city === "") {
        showError(inputElement, errorElement, "City is required");
        return false;
    }
    
    if (!isValidName(city)) {
        showError(inputElement, errorElement, "City name should contain only letters");
        return false;
    }
    
    clearError(inputElement, errorElement);
    return true;
}

function validateState() {
    const state = document.getElementById("state").value.trim();
    const errorElement = document.getElementById("stateError");
    const inputElement = document.getElementById("state");
    
    if (state === "") {
        showError(inputElement, errorElement, "State is required");
        return false;
    }
    
    if (!isValidName(state)) {
        showError(inputElement, errorElement, "State name should contain only letters");
        return false;
    }
    
    clearError(inputElement, errorElement);
    return true;
}

function validatePincode() {
    const pincode = document.getElementById("pincode").value.trim();
    const errorElement = document.getElementById("pincodeError");
    const inputElement = document.getElementById("pincode");
    
    if (pincode === "") {
        showError(inputElement, errorElement, "Pin code is required");
        return false;
    }
    
    const pincodePattern = /^[0-9]{6}$/;
    
    if (!pincodePattern.test(pincode)) {
        showError(inputElement, errorElement, "Pin code must be exactly 6 digits");
        return false;
    }
    
    clearError(inputElement, errorElement);
    return true;
}

function validateCourse() {
    const course = document.getElementById("course").value;
    const errorElement = document.getElementById("courseError");
    const inputElement = document.getElementById("course");
    
    if (course === "") {
        showError(inputElement, errorElement, "Please select a course");
        return false;
    }
    
    clearError(inputElement, errorElement);
    return true;
}

function validateAdmissionYear() {
    const year = document.getElementById("admissionYear").value;
    const errorElement = document.getElementById("admissionYearError");
    const inputElement = document.getElementById("admissionYear");
    
    if (year === "") {
        showError(inputElement, errorElement, "Please select admission year");
        return false;
    }
    
    clearError(inputElement, errorElement);
    return true;
}

function validatePreviousSchool() {
    const school = document.getElementById("previousSchool").value.trim();
    const errorElement = document.getElementById("previousSchoolError");
    const inputElement = document.getElementById("previousSchool");
    
    if (school === "") {
        showError(inputElement, errorElement, "Previous school/college name is required");
        return false;
    }
    
    if (school.length < 3) {
        showError(inputElement, errorElement, "School name must be at least 3 characters long");
        return false;
    }
    
    clearError(inputElement, errorElement);
    return true;
}

function validatePercentage() {
    const percentage = document.getElementById("percentage").value;
    const errorElement = document.getElementById("percentageError");
    const inputElement = document.getElementById("percentage");
    
    if (percentage === "") {
        showError(inputElement, errorElement, "Percentage/CGPA is required");
        return false;
    }
    
    const percentValue = parseFloat(percentage);
    
    if (isNaN(percentValue) || percentValue < 0 || percentValue > 100) {
        showError(inputElement, errorElement, "Percentage must be between 0 and 100");
        return false;
    }
    
    clearError(inputElement, errorElement);
    return true;
}

function validatePassingYear() {
    const year = document.getElementById("passingYear").value;
    const errorElement = document.getElementById("passingYearError");
    const inputElement = document.getElementById("passingYear");
    
    if (year === "") {
        showError(inputElement, errorElement, "Year of passing is required");
        return false;
    }
    
    const yearValue = parseInt(year);
    const currentYear = new Date().getFullYear();
    
    if (yearValue < 2000 || yearValue > currentYear + 1) {
        showError(inputElement, errorElement, "Please enter a valid year");
        return false;
    }
    
    clearError(inputElement, errorElement);
    return true;
}

function validateBoard() {
    const board = document.getElementById("board").value.trim();
    const errorElement = document.getElementById("boardError");
    const inputElement = document.getElementById("board");
    
    if (board === "") {
        showError(inputElement, errorElement, "Board/University is required");
        return false;
    }
    
    clearError(inputElement, errorElement);
    return true;
}

function validateFatherName() {
    const fatherName = document.getElementById("fatherName").value.trim();
    const errorElement = document.getElementById("fatherNameError");
    const inputElement = document.getElementById("fatherName");
    
    if (fatherName === "") {
        showError(inputElement, errorElement, "Father's name is required");
        return false;
    }
    
    if (!isValidName(fatherName)) {
        showError(inputElement, errorElement, "Name should contain only letters");
        return false;
    }
    
    clearError(inputElement, errorElement);
    return true;
}

function validateFatherPhone() {
    const phone = document.getElementById("fatherPhone").value.trim();
    const errorElement = document.getElementById("fatherPhoneError");
    const inputElement = document.getElementById("fatherPhone");
    
    if (phone === "") {
        showError(inputElement, errorElement, "Father's phone number is required");
        return false;
    }
    
    const phonePattern = /^[0-9]{10}$/;
    
    if (!phonePattern.test(phone)) {
        showError(inputElement, errorElement, "Phone number must be exactly 10 digits");
        return false;
    }
    
    clearError(inputElement, errorElement);
    return true;
}

function validateMotherName() {
    const motherName = document.getElementById("motherName").value.trim();
    const errorElement = document.getElementById("motherNameError");
    const inputElement = document.getElementById("motherName");
    
    if (motherName === "") {
        showError(inputElement, errorElement, "Mother's name is required");
        return false;
    }
    
    if (!isValidName(motherName)) {
        showError(inputElement, errorElement, "Name should contain only letters");
        return false;
    }
    
    clearError(inputElement, errorElement);
    return true;
}

function validateAnnualIncome() {
    const income = document.getElementById("annualIncome").value;
    const errorElement = document.getElementById("annualIncomeError");
    const inputElement = document.getElementById("annualIncome");
    
    if (income === "") {
        showError(inputElement, errorElement, "Please select annual family income");
        return false;
    }
    
    clearError(inputElement, errorElement);
    return true;
}

function validateWhyJoin() {
    const whyJoin = document.getElementById("whyJoin").value.trim();
    const errorElement = document.getElementById("whyJoinError");
    const inputElement = document.getElementById("whyJoin");
    
    if (whyJoin === "") {
        showError(inputElement, errorElement, "Please tell us why you want to join");
        return false;
    }
    
    if (whyJoin.length < 50) {
        showError(inputElement, errorElement, "Please write at least 50 characters (currently: " + whyJoin.length + " characters)");
        return false;
    }
    
    clearError(inputElement, errorElement);
    return true;
}

function validateTerms() {
    const terms = document.getElementById("terms").checked;
    const errorElement = document.getElementById("termsError");
    
    if (!terms) {
        showError(null, errorElement, "You must agree to the terms and conditions");
        return false;
    }
    
    clearError(null, errorElement);
    return true;
}

function isValidName(name) {
    const namePattern = /^[a-zA-Z\s]+$/;
    return namePattern.test(name);
}

function showError(inputElement, errorElement, message) {
    if (inputElement) {
        inputElement.classList.add("error");
    }
    errorElement.textContent = message;
    errorElement.classList.add("show");
}

function clearError(inputElement, errorElement) {
    if (inputElement) {
        inputElement.classList.remove("error");
    }
    errorElement.textContent = "";
    errorElement.classList.remove("show");
}

function clearAllErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    const errorInputs = document.querySelectorAll(".error");
    
    errorMessages.forEach(function(error) {
        error.textContent = "";
        error.classList.remove("show");
    });
    
    errorInputs.forEach(function(input) {
        input.classList.remove("error");
    });
}

function scrollToFirstError() {
    const firstError = document.querySelector(".error-message.show");
    if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}

function confirmReset() {
    const confirmed = confirm("Are you sure you want to reset the form?\n\nAll entered data will be lost.");
    if (confirmed) {
        clearAllErrors();
        return true;
    }
    return false;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("firstName").addEventListener("blur", validateFirstName);
    document.getElementById("lastName").addEventListener("blur", validateLastName);
    document.getElementById("dob").addEventListener("blur", validateDOB);
    document.getElementById("nationality").addEventListener("blur", validateNationality);
    
    document.getElementById("email").addEventListener("blur", validateEmail);
    document.getElementById("phone").addEventListener("blur", validatePhone);
    document.getElementById("address").addEventListener("blur", validateAddress);
    document.getElementById("city").addEventListener("blur", validateCity);
    document.getElementById("state").addEventListener("blur", validateState);
    document.getElementById("pincode").addEventListener("blur", validatePincode);
    
    document.getElementById("course").addEventListener("blur", validateCourse);
    document.getElementById("admissionYear").addEventListener("blur", validateAdmissionYear);
    document.getElementById("previousSchool").addEventListener("blur", validatePreviousSchool);
    document.getElementById("percentage").addEventListener("blur", validatePercentage);
    document.getElementById("passingYear").addEventListener("blur", validatePassingYear);
    document.getElementById("board").addEventListener("blur", validateBoard);
    
    document.getElementById("fatherName").addEventListener("blur", validateFatherName);
    document.getElementById("fatherPhone").addEventListener("blur", validateFatherPhone);
    document.getElementById("motherName").addEventListener("blur", validateMotherName);
    document.getElementById("annualIncome").addEventListener("blur", validateAnnualIncome);
    
    document.getElementById("whyJoin").addEventListener("blur", validateWhyJoin);
    
    document.getElementById("whyJoin").addEventListener("input", function() {
        const length = this.value.trim().length;
        const helpText = this.nextElementSibling;
        if (helpText && helpText.classList.contains("help-text")) {
            helpText.textContent = "Character count: " + length + " / 50 minimum";
        }
    });
});

window.addEventListener("load", function() {
    console.log("Admission Form loaded successfully!");
    console.log("All validations are active.");
});