const questions = [
  {
    question: "What is a way to help maintain marine ecosystems?",
    options: ["Dump waste into water bodies", "Reuse, reduce, recycle", "Overfishing", "Disturb coral reefs"],
    answer: "Reuse, reduce, recycle"
  },
  {
    question: "Define overfishing.",
    options: ["Depletes fish populations and disrupts marine food chains", "Fishing only matured fishes", "Letting juvenile fishes develop and grow", "Throwing rotten fish back into the water"],
    answer: "Depletes fish populations and disrupts marine food chains"
  },
  {
    question: "How does climate change affect the oceans?",
    options: ["Maintains correct temperatures", "It alters the water temperatures which affects marine life", "Helps in the development of young sea creatures", "Adjust the water based on the preference of the animals"],
    answer: "It alters the water temperatures which affects marine life"
  },
  {
    question: "If we don't take action, what is most likely to happen to resources we get from them?",
    options: ["More resources will be made", "Coral reefs will flourish", "Multiplied population of fish", "Lose a significant amount of resources"],
    answer: "Lose a significant amount of resources"
  },
  {
    question: "Tropical coral reefs comprise over how much of the total ocean area?",
    options: ["0.13%", "0.6%%", "0.1%", "0.3%"],
    answer: "0.1%"
  }
];

let currentQuestionIndex = 0;
let score = 0;
let answeredQuestions = [];

function displayQuestion(index) {
  const questionsDiv = document.getElementById("questions");
  questionsDiv.innerHTML = "";

  const q = questions[index];
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");
  questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

  q.options.forEach((option, optIdx) => {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `question`;
    radio.value = option;
    const radioId = `q${index}-opt${optIdx}`;
    radio.id = radioId;

    // Pre-select previously answered option if any
    if (answeredQuestions[index] === option) {
      radio.checked = true;
    }

    const label = document.createElement("label");
    label.setAttribute("for", radioId);
    label.textContent = option;

    const optionContainer = document.createElement("div");
    optionContainer.classList.add("option-container");
    optionContainer.appendChild(radio);
    optionContainer.appendChild(label);

    questionDiv.appendChild(optionContainer);
  });

  questionsDiv.appendChild(questionDiv);
  updateButtonVisibility();
}

function nextQuestion() {
  const selectedOption = document.querySelector(`input[name="question"]:checked`);
  if (!selectedOption) {
    alert("Please select an answer.");
    return;
  }

  answeredQuestions[currentQuestionIndex] = selectedOption.value;

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion(currentQuestionIndex);
  } else {
    calculateScore();  // Calculate score fresh here
    document.getElementById("nextButton").classList.add("hidden");
    document.getElementById("submitButton").classList.remove("hidden");
    displayResults();
  }
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion(currentQuestionIndex);
  }
}

function calculateScore() {
  let newScore = 0;
  for (let i = 0; i < answeredQuestions.length; i++) {
    if (answeredQuestions[i] === questions[i].answer) {
      newScore++;
    }
  }
  score = newScore;
}

function displayResults() {
  calculateScore(); // Ensure score is up to date

  const questionsDiv = document.getElementById("questions");
  questionsDiv.innerHTML = "";

  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

    q.options.forEach((option) => {
      const label = document.createElement("label");
      label.textContent = option;

      if (option === q.answer) {
        label.classList.add("correct");
      } else if (option === answeredQuestions[index]) {
        label.classList.add("incorrect");
      }

      const optionContainer = document.createElement("div");
      optionContainer.classList.add("option-container");
      optionContainer.appendChild(label);
      questionDiv.appendChild(optionContainer);
    });

    questionsDiv.appendChild(questionDiv);
  });

  const resultDiv = document.getElementById("result");
  resultDiv.textContent = `You scored ${score} out of ${questions.length}.`;

  updateButtonVisibility();
}

function updateButtonVisibility() {
  const prevButton = document.getElementById("prevButton");
  if (currentQuestionIndex === 0) {
    prevButton.classList.add("hidden");
  } else {
    prevButton.classList.remove("hidden");
  }
}

displayQuestion(currentQuestionIndex);
