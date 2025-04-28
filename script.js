// Change text content dynamically
document.querySelector('h1').textContent = "Welcome to Pawfect Vet Clinic 🐾";

// Modify CSS styles via JavaScript
document.querySelector('header').style.backgroundColor = '#3E8E41';

// Add or remove an element when a button is clicked
const toggleButton = document.getElementById('toggle-info');
const aboutSection = document.getElementById('about');

toggleButton.addEventListener('click', () => {
    if (aboutSection.style.display === 'none') {
        aboutSection.style.display = 'block';
        toggleButton.textContent = 'Hide About Section';
    } else {
        aboutSection.style.display = 'none';
        toggleButton.textContent = 'Show About Section';
    }
});