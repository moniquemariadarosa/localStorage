document.getElementById('buttonText').addEventListener('click', function() {
    inputText = document.getElementById('inputText').value;
    localStorage.setItem('dato', inputText);
    document.getElementById('inputText').value = '';
});