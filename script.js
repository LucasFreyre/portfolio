const body = document.body;
const btn = document.querySelector('.sun-btn');

let darkMode = localStorage.getItem('darkmode');

function enableDarkMode() {
    body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

function disableDarkMode() {
    body.classList.remove('darkmode');
    localStorage.removeItem('darkmode');
}

if (darkMode === 'active') enableDarkMode();

btn.addEventListener('click', () => {
    if (body.classList.contains('darkmode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});