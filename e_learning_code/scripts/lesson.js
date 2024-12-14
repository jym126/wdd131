document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const previousScore = localStorage.getItem('quizScore');
const scoreDisplay = document.getElementById('scoreDisplay');
if (previousScore) {
  scoreDisplay.innerHTML = `<p>Your last quiz score: ${previousScore}/3</p>`;
}

function mostrarAlerta() {
  const nombre = document.getElementById('name').value;
  const tema = document.getElementById('topic').value;

  if (nombre && tema) {
      alert(`Welcome, ${nombre}! We will send you more information about "${tema}" soon.`);
  } else {
      alert('Please, complete all fields befor asking for info.');
  }
}
