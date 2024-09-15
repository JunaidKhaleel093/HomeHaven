
document.querySelector('.scroll-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


document.querySelector('.scroll-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const scrollTopBtn = document.getElementById('scrollTopBtn');

// Add event listener to the button to scroll to the top
scrollTopBtn.addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});