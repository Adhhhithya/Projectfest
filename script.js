const checkbox = document.getElementById('checkbox');
const dialog = document.getElementsById('confirmed');
let count = 0;
checkbox.addEventListener('change', function() {
  if (this.checked) {
    dialog.style.display = 'block';
    count++;
  } else {
    dialog.style.display = 'none';
  }
});
