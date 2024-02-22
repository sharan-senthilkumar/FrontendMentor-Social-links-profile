
function theme() {
document.body.classList.toggle('body-light');

// Toggle dark mode for card
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.classList.toggle('card-light');
});

// Toggle dark mode for location
const locations = document.querySelectorAll('.location');
locations.forEach(location => {
    location.classList.toggle('location-light');
});

// Toggle dark mode for image
const images = document.querySelectorAll('.img');
images.forEach(image => {
    image.classList.toggle('img-light');
});

// Toggle dark mode for button
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.classList.toggle('button-light');
});
const icon = document.querySelector('.fa-solid');
icon.classList.toggle('fa-moon'); // Toggle the moon class
icon.classList.toggle('fa-sun'); // Toggle the sun class
icon.style.color = icon.style.color === 'seagreen' ? 'yellow' : 'seagreen'; // Toggle the color between black and yellow


}
