var checkbox = document.getElementsById('checkbox');
var confirms = document.getElementsById('confirmed');
let count = 0;
checkbox.addEventListener('change', function() {
    if (this.checked) {
        checkbox.style.display = 'block';
    } else {
        // Checkbox is unchecked
        // You can add code here if you want to do something when the checkbox is unchecked
    }
});
