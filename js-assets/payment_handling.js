function showError(message) {
    alert(message); // Display a simple alert for error messages
}

function handlePayment(event) {
    event.preventDefault();

    // Fetch form values
    const fullName = document.getElementById("full-name").value.trim();
    const cardNumber = document.getElementById("card-number").value.trim();
    const expiryDate = document.getElementById("expiry-date").value.trim();
    const cvv = document.getElementById("cvv").value.trim();
    const courseCount = document.getElementById("course-count").value.trim();

    // Validate fields
    if (!fullName) {
        showError("Please enter your full name.");
        return false;
    }
    if (!/^\d{16}$/.test(cardNumber)) {
        showError("Card number must be 16 digits.");
        return false;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        showError("Expiry date must be in the format MM/YY.");
        return false;
    }
    if (!/^\d{3}$/.test(cvv)) {
        showError("CVV must be a 3-digit number.");
        return false;
    }
    if (isNaN(courseCount) || courseCount <= 0) {
        showError("Please enter a valid number of courses.");
        return false;
    }

    // Display a success message
    document.querySelector('.payment-form').innerHTML = 
        '<div class="thank-you-message">Thank you for supporting and empowering the nation!</div>';

    return true; // Return true if all checks pass
}
