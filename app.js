const toggleButton = document.querySelector('.toggle-theme-button');
const body = document.querySelector('body');
const toggleBall = document.querySelector('.toggle-theme-button__ball');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    toggleBall.classList.toggle('toggle-theme-ball-style');
    toggleButton.style.borderColor = "var(--accentColor)";

});