document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const quizQuestions = [
    {
      question: "What does HTML stand for?",
      options: ["HyperText Machine Language", "HyperText Markup Language"],
      answer: 1,
    },
    {
      question: "What is the purpose of CSS?",
      options: ["Styling a webpage", "Structuring a webpage"],
      answer: 0,
    },
    {
      question: "What does JavaScript do?",
      options: ["Adds interactivity", "Designs the layout"],
      answer: 0,
    },
  ];
  
  // Dynamically generate quiz questions
  const quizContainer = document.getElementById("quizContainer");
  quizQuestions.forEach((q, index) => {
    quizContainer.innerHTML += `
      <p>${q.question}</p>
      <label>
        <input type="radio" name="q${index}" value="0"> ${q.options[0]}
      </label>
      <label>
        <input type="radio" name="q${index}" value="1"> ${q.options[1]}
      </label>
    `;
  });
  
  function submitQuiz() {
    const answers = document.querySelectorAll("input[type='radio']:checked");
    let score = 0;
  
    answers.forEach((answer, index) => {
      if (parseInt(answer.value) === quizQuestions[index].answer) {
        score++;
      }
    });
  
    document.getElementById("score").innerText = `Your score: ${score} / ${quizQuestions.length}`;
    localStorage.setItem("quizScore", score); // Save score to localStorage
  }