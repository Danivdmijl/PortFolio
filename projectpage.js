document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const overlay = document.getElementById('overlay');
    const bigCard = document.getElementById('big-card');
    const bigCardImage = document.getElementById('big-card-image');
    const bigCardTitle = document.getElementById('big-card-title');
    const bigCardDescription = document.getElementById('big-card-description');
    const bigCardButton = document.getElementById('big-card-button');
  
    cards.forEach(function(card) {
      card.addEventListener('click', function() {
        const additionalText = card.dataset.additionalText;
        const imageSrc = card.querySelector('.card-image').src;
        const title = card.querySelector('.card-title').textContent;
        const description = card.querySelector('.card-description').textContent;
  
        bigCardImage.src = imageSrc;
        bigCardTitle.textContent = title;
        bigCardDescription.textContent = description + ' ' + additionalText;
        bigCardButton.href = card.querySelector('.card-button').href;
  
        overlay.style.display = 'block';
        bigCard.style.display = 'block';
      });
    });
  
    overlay.addEventListener('click', function() {
      overlay.style.display = 'none';
      bigCard.style.display = 'none';
    });
  });
  