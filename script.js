document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('Btn');
    var display = document.getElementById("NumberInt");

    if (button) {
        button.addEventListener('click', () => {
            window.open("Request.html");
            display.placeholder = "Clothes Needed";
        });
    }
});

