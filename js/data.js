document.addEventListener('DOMContentLoaded', function() {
    storedData = localStorage.getItem('dato');
    document.getElementById('data').textContent = storedData ? storedData : 'No hay datos guardados.';
});