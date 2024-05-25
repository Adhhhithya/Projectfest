
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('Btn');
    const display = document.getElementById("NumberInt");

    button.addEventListener('click', () => {
        window.open("Request.html");
        display.placeholder="Clothes Needed";
    });
});

