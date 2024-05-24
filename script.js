document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('Btn');
    const display = document.getElementById('msg');
    let clickCount = 0;

    button.addEventListener('click', () => {
        clickCount++;
        if (clickCount >= 2) {
            button.disabled = true;
            display.style.display = 'block';
        }
    });
});
  