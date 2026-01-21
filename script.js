/* ================================
   Question Bank (Unlimited)
================================ */
const questionPool = [
    {
        q: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine",
            "Hyper Tool ML",
            "None"
        ],
        correct: 0
    },
    {
        q: "CSS is used for?",
        options: ["Logic", "Styling", "Database", "Hosting"],
        correct: 1
    },
    {
        q: "JS is?",
        options: ["Markup", "Styling", "Programming", "Framework"],
        correct: 2
    },
    {
        q: "Which is backend?",
        options: ["HTML", "CSS", "JavaScript", "Django"],
        correct: 3
    },
    {
        q: "Git is used for?",
        options: ["Design", "Version Control", "Hosting", "Database"],
        correct: 1
    }
];

/* ================================
   State Variables
================================ */
let questions = [];
let currentIndex = 0;

/* ================================
   DOM Elements
================================ */
const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const nextBtn = document.getElementById("nextBtn");
const statusEl = document.getElementById("status");

/* ================================
   Utility Functions
================================ */

// Shuffle array (Fisher–Yates style)
function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

// Disable all options
function disableOptions() {
    optionButtons.forEach(btn => btn.disabled = true);
}

// Reset option styles
function resetOptions() {
    optionButtons.forEach(btn => {
        btn.disabled = false;
        btn.style.background = "";
    });
}

/* ================================
   Quiz Core Functions
================================ */

// Start / Restart Quiz
function startQuiz() {
    questions = shuffleArray(questionPool);
    currentIndex = 0;
    statusEl.innerText = "";
    document.querySelector(".options").style.display = "block";
    loadQuestion();
}

// Load Current Question
function loadQuestion() {
    if (currentIndex >= questions.length) {
        endQuiz();
        return;
    }

    const currentQuestion = questions[currentIndex];
    questionEl.innerText = currentQuestion.q;
    statusEl.innerText = "";
    resetOptions();

    optionButtons.forEach((btn, index) => {
        btn.innerText = currentQuestion.options[index];
    });

    nextBtn.style.display = "none";
}

// Check Answer
function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentIndex].correct;

    if (selectedIndex === correctIndex) {
        optionButtons[selectedIndex].style.background = "green";
        statusEl.innerText = "✅ Correct Answer!";
        disableOptions();
        nextBtn.style.display = "block";
    } else {
        optionButtons[selectedIndex].style.background = "red";
        optionButtons[correctIndex].style.background = "green";
        statusEl.innerText = "❌ Wrong Answer! Restarting Quiz...";

        disableOptions();

        setTimeout(startQuiz, 1500); // restart quiz
    }
}

// Next Question
function nextQuestion() {
    currentIndex++;
    loadQuestion();
}

// End Quiz
function endQuiz() {
    questionEl.innerText = "🎉 Quiz Completed!";
    document.querySelector(".options").style.display = "none";
    nextBtn.style.display = "none";
    statusEl.innerText = "Great job! Refresh to play again.";
}

/* ================================
   Initialize Quiz
================================ */
startQuiz();
