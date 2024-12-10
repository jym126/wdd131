document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const previousScore = localStorage.getItem('quizScore');
const scoreDisplay = document.getElementById('scoreDisplay');
if (previousScore) {
  scoreDisplay.innerHTML = `<p>Your last quiz score: ${previousScore}/3</p>`;
}
