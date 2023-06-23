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
