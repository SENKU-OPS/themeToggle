const toggleButton = document.querySelector('.toggle-theme-button');
const toggleBall = document.querySelector('.toggle-theme-button__ball');
let darkMode = localStorage.getItem('darkMode');


function enableDarkMode() {
    document.body.classList.add('dark-theme');
    toggleBall.classList.add("toggle-theme-ball-style");
    toggleButton.style.borderColor = "var(--toggleAccent)";
    darkMode = localStorage.setItem('darkMode', 'enabled');
}


function disableDarkMode() {
    document.body.classList.remove("dark-theme");
    toggleBall.classList.remove("toggle-theme-ball-style");
    darkMode = localStorage.setItem('darkMode', null);

}
if (darkMode === "enabled") {
    enableDarkMode();
}

toggleButton.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

});