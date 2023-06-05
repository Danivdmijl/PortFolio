    // JavaScript function to create a scroll-to-top button
    const scrollButton = document.getElementById('scrollButton');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 200) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
