// Define the first quiz questions and answers
const questions1 = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    correctAnswer: 0
  },
  {
    question: "Which of these is a valid JavaScript variable declaration?",
    options: ["var x = 10;", "let x = 10;", "All of the above"],
    correctAnswer: 2
  },
  {
    question: "What is the purpose of the `padding` property in CSS?",
    options: [
      "It adds space outside the element's border.",
      "It changes the color of the element.",
      "It adds space inside the element, between the content and the border."
    ],
    correctAnswer: 2
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
    correctAnswer: 0
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "#", "/* */"],
    correctAnswer: 0
  },
  {
    question: "Which of these is an event listener in JavaScript?",
    options: ["addEventListener()", "onEvent()", "listen()"],
    correctAnswer: 0
  },
  {
    question: "Which of the following is the correct syntax to create a function in JavaScript?",
    options: [
      "function myFunction() {}",
      "function: myFunction() {}",
      "create function myFunction() {}"
    ],
    correctAnswer: 0
  },
  {
    question: "How do you select an element with the class name 'example' in JavaScript?",
    options: [
      "document.getElementByClass('example')",
      "document.querySelector('.example')",
      "document.getElementById('example')"
    ],
    correctAnswer: 1
  },
  {
    question: "Which of the following is NOT a valid data type in JavaScript?",
    options: ["Boolean", "Integer", "String"],
    correctAnswer: 1
  },
  {
    question: "How can you declare a constant in JavaScript?",
    options: ["const x = 10;", "let x = 10;", "var x = 10;"],
    correctAnswer: 0
  }
];

// Define the second quiz questions and answers
const questions2 = [
  {
    question: "What is the correct syntax for referring to an external JavaScript file?",
    options: ["<script src='file.js'>", "<script href='file.js'>", "<script link='file.js'>"],
    correctAnswer: 0
  },
  {
    question: "Which method is used to round a number to the nearest integer in JavaScript?",
    options: ["Math.round()", "Math.ceil()", "Math.floor()"],
    correctAnswer: 0
  },
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Manipulation", "Document Oriented Methodology"],
    correctAnswer: 0
  },
  {
    question: "Which JavaScript keyword is used to declare a block-scoped variable?",
    options: ["var", "let", "block"],
    correctAnswer: 1
  },
  {
    question: "Which of the following is a correct way to create an array in JavaScript?",
    options: ["let arr = [1, 2, 3];", "let arr = {1, 2, 3};", "let arr = (1, 2, 3);"],
    correctAnswer: 0
  },
  {
    question: "How do you write an 'if' statement in JavaScript?",
    options: ["if i == 5 then", "if (i == 5)", "if i = 5"],
    correctAnswer: 1
  },
  {
    question: "Which operator is used to assign a value to a variable in JavaScript?",
    options: ["=", "==", "==="],
    correctAnswer: 0
  },
  {
    question: "What is the output of: console.log(typeof null)?",
    options: ["null", "object", "undefined"],
    correctAnswer: 1
  },
  {
    question: "How can you add a comment in JavaScript?",
    options: ["// This is a comment", "<!-- This is a comment -->", "# This is a comment"],
    correctAnswer: 0
  },
  {
    question: "What will be the output of: console.log(2 + '2')?",
    options: ["22", "4", "undefined"],
    correctAnswer: 0
  }
];

// Current quiz variable
let currentQuiz = questions1;

// Dynamically generate the quiz questions and options
function loadQuiz() {
  const quizContainer = document.getElementById('quizContainer');
  quizContainer.innerHTML = ''; // Clear any existing content

  currentQuiz.forEach((question, index) => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');

    const questionText = document.createElement('p');
    questionText.textContent = `${index + 1}. ${question.question}`;
    questionElement.appendChild(questionText);

    question.options.forEach((option, i) => {
      const label = document.createElement('label');
      label.innerHTML = `
        <input type="radio" name="question${index}" value="${i}">
        ${option}
      `;
      questionElement.appendChild(label);
    });

    quizContainer.appendChild(questionElement);
  });
}

// Submit the quiz and calculate the score
function submitQuiz() {
  let score = 0;

  currentQuiz.forEach((question, index) => {
    const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);

    if (selectedOption) {
      const answerIndex = parseInt(selectedOption.value);
      if (answerIndex === question.correctAnswer) {
        score++;
      }
    }
  });

  document.getElementById('score').textContent = `Your score: ${score} / ${currentQuiz.length}`;
}

// Switch quiz function
function switchQuiz() {
  currentQuiz = currentQuiz === questions1 ? questions2 : questions1;
  loadQuiz();
  document.getElementById('score').textContent = ''; // Clear the score
}

// Display current year and last modified date
function displayFooterInfo() {
  const currentYear = new Date().getFullYear();
  const lastModified = new Date(document.lastModified).toLocaleDateString();

  document.getElementById('currentYear').textContent = currentYear;
  document.getElementById('lastModified').textContent = lastModified;
}

// Initialize quiz on page load
window.onload = function () {
  loadQuiz();
  displayFooterInfo();

  // Add the "Another Quiz?" button
  const myDiv = document.getElementById('newQuiz');
  const switchButton = document.createElement('button');
  switchButton.textContent = 'Another Quiz?';
  switchButton.onclick = switchQuiz;
  myDiv.appendChild(switchButton);
};
