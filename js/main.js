var openModalButtons = document.querySelectorAll('.open-modal-btn');

// Add click event listeners to open the modals
openModalButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var modalId = button.getAttribute('data-modal-id');
        var modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "block";
        } else {
            console.error("Modal not found for ID: " + modalId);
        }
    });
});

// Get all the close buttons
var closeButtons = document.querySelectorAll('.close');

// Add click event listeners to close the modals
closeButtons.forEach(function (closeButton) {
    closeButton.addEventListener('click', function () {
        var modalId = closeButton.getAttribute('data-modal-id');
        var modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "none";
        } else {
            console.error("Modal not found for ID: " + modalId);
        }
    });
});

// When the user clicks anywhere outside of a modal, close it
window.addEventListener('click', function (event) {
    openModalButtons.forEach(function (button) {
        var modalId = button.getAttribute('data-modal-id');
        var modal = document.getElementById(modalId);
        if (modal && event.target === modal) {
            modal.style.display = "none";
        }
    });
});

const linkdinIMGs = document.querySelectorAll('.linkdin--button');
const BigPic = document.getElementById("js--bigpicture");

const linkdinURL = "https://www.linkedin.com/in/dani-van-der-mijl-163246232/";

linkdinIMGs.forEach(function (linkdinIMG) {
    linkdinIMG.addEventListener('click', function () {
        window.open(linkdinURL, '_blank');
    });
});

BigPic.addEventListener('click', function () {
    window.open(linkdinURL, '_blank');
});

const githubIMGs = document.querySelectorAll('.github--button');

var githubURLs = [
    "https://github.com/Danivdmijl/Succes-Dagboek",
    "https://github.com/Danivdmijl/Cookie",
    "https://github.com/Danivdmijl/Kanao-s-Coin-Flip",
    "https://github.com/Danivdmijl/ColorPicker",
    "https://github.com/Danivdmijl/Banky",
    "https://github.com/IanSchaafsma/BO-Museum_Online",
    "https://github.com/Danivdmijl/Jeroenzeles/tree/main/Eindopdracht",
    "https://github.com/Danivdmijl/Game-Algoritme",
    "https://github.com/Danivdmijl/FE-BO/tree/main/facyding",
    "https://github.com/Danivdmijl/F2M3FRO/tree/main/Dashboard-FRO",
    "https://github.com/Danivdmijl/Drakuze",
    "https://github.com/Danivdmijl/CSS-Art-Flex/tree/main/Post%20its"
];

githubIMGs.forEach(function (githubIMG, index) {
    githubIMG.addEventListener('click', function () {
        window.open(githubURLs[index], '_blank');
    });
});





// JavaScript for scroll-to-top button
var scrollButton = document.querySelector('.scroll-button');
scrollButton.style.display = 'none'; // Start with the button hidden

window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

// Smooth scroll animation when button is clicked
scrollButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
