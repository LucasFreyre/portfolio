const body = document.body;
const btn = document.querySelector('.sun-btn');
const sun = document.querySelector(".sun")
const moon = document.querySelector(".moon")

let darkMode = localStorage.getItem('darkmode');

function enableDarkMode() {
    body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    sun.style.display = 'none';
    moon.style.display = 'block';
}

function disableDarkMode() {
    body.classList.remove('darkmode');
    localStorage.removeItem('darkmode');
    sun.style.display = 'block';
    moon.style.display = 'none';
}

if (darkMode === 'active') enableDarkMode();

btn.addEventListener('click', () => {
    if (body.classList.contains('darkmode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

