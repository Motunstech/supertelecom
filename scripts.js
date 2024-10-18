function showAlert() {
    alert("Coming out soon!");
}
// Get the button
const backToTopButton = document.getElementById("backToTop");

// Show the button when scrolling down
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to the top when the button is clicked
backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll
    });
});
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting

    // Get form values
    const fullname = document.getElementById('fullname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const referral = document.getElementById('referral').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Simple validation for password match
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // Display form values in an alert
    alert(`
        Registration Successful! 
        
        Full Name: ${fullname}
        Username: ${username}
        Email: ${email}
        Phone: ${phone}
        Address: ${address}
        Referral: ${referral || 'No referral'}
    `);
});