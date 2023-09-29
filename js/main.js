

// Get all the "View Project" buttons
var openModalButtons = document.querySelectorAll('.open-modal-btn');

// Add click event listeners to open the modals
openModalButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var modalId = button.getAttribute('data-modal-id');
        var modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "block";
        }
    });
});


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



const linkdinIMGs = document.querySelectorAll('.linkdin--button');

const linkdinURL = "https://www.linkedin.com/in/dani-van-der-mijl-163246232/";

linkdinIMGs.forEach(function(linkdinIMG) {
    linkdinIMG.addEventListener('click', function() {
        window.open(linkdinURL, '_blank');
    });
});


const githubIMGs = document.querySelectorAll('.github--button');

const githubURL = "https://github.com/yourusername"; //

githubIMGs.forEach(function(githubIMG) {
    githubIMG.addEventListener('click', function() {
        window.open(githubURL, '_blank');
    });
});




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