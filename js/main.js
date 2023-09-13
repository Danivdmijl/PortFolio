// JavaScript for scroll-to-top button
window.addEventListener('scroll', function() {
    var scrollButton = document.querySelector('.scroll-button');
    if (window.scrollY > 200) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

// Smooth scroll animation when button is clicked
var scrollButton = document.querySelector('.scroll-button');
scrollButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Get all the "View Project" buttons
var openModalButtons = document.querySelectorAll('.open-modal-btn');

// Add click event listeners to open the modals
openModalButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Get the modal id from the data-modal-id attribute
        var modalId = button.getAttribute('data-modal-id');
        var modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "block";
        }
    });
});

// Get all the close buttons within modals
var closeButtons = document.querySelectorAll('.close');

// Add click event listeners to close the modals
closeButtons.forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
        var modal = closeButton.parentElement;
        if (modal) {
            modal.style.display = "none";
        }
    });
});

// When the user clicks anywhere outside of a modal, close it
window.addEventListener('click', function(event) {
    openModalButtons.forEach(function(button) {
        var modalId = button.getAttribute('data-modal-id');
        var modal = document.getElementById(modalId);
        if (modal && event.target == modal) {
            modal.style.display = "none";
        }
    });
});