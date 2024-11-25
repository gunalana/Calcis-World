
const settingsButton = document.getElementById('settings-btn');
const settingsMenu = document.getElementById('settings-menu');
const closeButton = document.getElementById('close-btn');


settingsButton.addEventListener('click', () => {
    settingsMenu.classList.add('open');
});

closeButton.addEventListener('click', () => {
    settingsMenu.classList.remove('open');
});
