// JavaScript to populate current year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').querySelector('span').textContent = document.lastModified;