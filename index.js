document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeTextButton');
    const header = document.getElementById('header');

    button.addEventListener('click', () => {
        header.textContent = 'нюхай бэбру';
    });
});
