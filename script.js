document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('Btn');
    const display = document.getElementById('msg');
    let clickCount = 0;

    button.addEventListener('click', () => {
        clickCount++;
        if (clickCount >= 1) {
            button.disabled = true;
            window.open("Request.html");
        }
    });
});
