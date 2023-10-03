var openModalButtons = document.querySelectorAll('.open-modal-btn');

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

var closeButtons = document.querySelectorAll('.close');

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





var scrollButton = document.querySelector('.scroll-button');
scrollButton.style.display = 'none'; 

window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

scrollButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})
