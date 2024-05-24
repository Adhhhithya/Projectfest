var checkbox = document.getElementsById('checkbox');
var confirms = document.getElementsById('confirmed');
let count = 0;
function checkme(){
    if (checkbox.checked==true) {
        confirms.style.display = 'block';
    } else {
        checkbox.checked=false;
        // Checkbox is unchecked
        // You can add code here if you want to do something when the checkbox is unchecked
    }
}
