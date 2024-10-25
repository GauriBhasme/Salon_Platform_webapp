


let selectedUserType = ''; // To store the selected user type

// Event listener for selecting Customer
document.getElementById('customer').addEventListener('click', function() {
    document.querySelector('.container').classList.add('flipped');
    selectedUserType = 'customer'; // Set selectedUserType to customer
});

// Event listener for selecting Salon Shop
document.getElementById('salonShop').addEventListener('click', function() {
    document.querySelector('.container').classList.add('flipped');
    selectedUserType = 'salonShop'; // Set selectedUserType to salonShop
});

// Event listener for Login Form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    if (selectedUserType === 'customer') {
        // Redirect to customer index page
        window.location.href = "customerPage.html"; 
    } else if (selectedUserType === 'salonShop') {
        // Redirect to owner registration page
        window.location.href = "ownerRegistration.html";
    } else {
        alert('Please select a user type (Customer or Salon Shop) before logging in.');
    }
});