document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const previousScore = localStorage.getItem('quizScore');
const scoreDisplay = document.getElementById('scoreDisplay');
if (previousScore) {
  scoreDisplay.innerHTML = `<p>Your last quiz score: ${previousScore}/3</p>`;
}

function mostrarAlerta() {
  const nombre = document.getElementById('nombre').value;
  const tema = document.getElementById('tema').value;

  if (nombre && tema) {
      alert(`¡Bienvenido, ${nombre}! Te enviaremos más información sobre "${tema}" pronto.`);
  } else {
      alert('Por favor, completa todos los campos antes de enviar el formulario.');
  }
}
