const cb = document.getElementsByClassName('checkbox');
const confirms = document.getElementsByClassName('confirmed');
let count = 0;
checkbox.addEventListener('change', function oncheck(){
    if (cb.checked) {
        confirms.style.display = 'block';
    } else {
        cb.checked=false;
        // Checkbox is unchecked
        // You can add code here if you want to do something when the checkbox is unchecked
    }
});
