/* ================================
   Question Bank
================================ */
const questionPool = [
    { q: "HTML stands for?", options: ["Hyper Text Markup Language", "High Text Machine", "Hyper Tool ML", "None"], correct: 0 },
    { q: "CSS is used for?", options: ["Logic", "Styling", "Database", "Hosting"], correct: 1 },
    { q: "JS is?", options: ["Markup", "Styling", "Programming", "Framework"], correct: 2 },
    { q: "Which is backend?", options: ["HTML", "CSS", "JavaScript", "Django"], correct: 3 },
    { q: "Git is used for?", options: ["Design", "Version Control", "Hosting", "Database"], correct: 1 },

    { q: "HTML tag for link?", options: ["<link>", "<a>", "<href>", "<url>"], correct: 1 },
    { q: "CSS stands for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheet", "Color Style Sheet"], correct: 1 },
    { q: "JS file extension?", options: [".java", ".script", ".js", ".jsx"], correct: 2 },
    { q: "Which is frontend?", options: ["Django", "Node", "HTML", "MongoDB"], correct: 2 },
    { q: "Git command to upload code?", options: ["git pull", "git push", "git clone", "git init"], correct: 1 },

    { q: "HTML tag for image?", options: ["<image>", "<img>", "<pic>", "<src>"], correct: 1 },
    { q: "CSS property for text color?", options: ["font", "background", "color", "text-style"], correct: 2 },
    { q: "JS keyword for variable?", options: ["int", "var", "define", "letit"], correct: 1 },
    { q: "Which is database?", options: ["React", "MongoDB", "HTML", "CSS"], correct: 1 },
    { q: "Git command to download repo?", options: ["git push", "git clone", "git init", "git add"], correct: 1 },

    { q: "HTML tag for button?", options: ["<btn>", "<button>", "<click>", "<input>"], correct: 1 },
    { q: "CSS for margin?", options: ["space", "gap", "margin", "padding"], correct: 2 },
    { q: "JS function keyword?", options: ["method", "func", "function", "define"], correct: 2 },
    { q: "Which is framework?", options: ["HTML", "CSS", "React", "Git"], correct: 2 },
    { q: "Git command to save changes?", options: ["git save", "git commit", "git store", "git keep"], correct: 1 },

    { q: "HTML tag for list?", options: ["<list>", "<ul>", "<li>", "<ol>"], correct: 1 },
    { q: "CSS property for font size?", options: ["font-weight", "text-size", "font-size", "size"], correct: 2 },
    { q: "JS loop?", options: ["repeat", "loop", "for", "each"], correct: 2 },
    { q: "Backend language?", options: ["CSS", "HTML", "Python", "Bootstrap"], correct: 2 },
    { q: "Git file ignore?", options: ["git.hide", "gitignore", ".gitignore", "ignore.git"], correct: 2 },

    { q: "HTML tag for input?", options: ["<text>", "<input>", "<form>", "<type>"], correct: 1 },
    { q: "CSS display flex?", options: ["block", "inline", "flex", "grid"], correct: 2 },
    { q: "JS array?", options: ["{}", "()", "[]", "<>"], correct: 2 },
    { q: "Which is backend framework?", options: ["React", "Vue", "Django", "CSS"], correct: 2 },
    { q: "Git branch command?", options: ["git tree", "git branch", "git fork", "git split"], correct: 1 },

    { q: "HTML tag for table?", options: ["<table>", "<tab>", "<tr>", "<td>"], correct: 0 },
    { q: "CSS border property?", options: ["edge", "outline", "border", "line"], correct: 2 },
    { q: "JS comparison operator?", options: ["=", "==", "!=", "==="], correct: 3 },
    { q: "Which is package manager?", options: ["npm", "git", "html", "css"], correct: 0 },
    { q: "Git init does?", options: ["Upload repo", "Create repo", "Delete repo", "Clone repo"], correct: 1 }
];

/* ================================
   State Variables
================================ */
let questions = [];
let currentIndex = 0;
let score = 0;

/* ================================
   DOM Elements (IMPORTANT)
================================ */
const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const nextBtn = document.getElementById("nextBtn");
const statusEl = document.getElementById("status");
const scoreEl = document.getElementById("score");

/* ================================
   Utility Functions
================================ */
function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function disableOptions() {
    optionButtons.forEach(btn => btn.disabled = true);
}

function resetOptions() {
    optionButtons.forEach(btn => {
        btn.disabled = false;
        btn.style.background = "";
    });
}

/* ================================
   Quiz Core
================================ */
function startQuiz() {
    questions = shuffleArray(questionPool);
    currentIndex = 0;
    score = 0;
    scoreEl.innerText = `✔ ${score}`;
    statusEl.innerText = "";
    document.querySelector(".options").style.display = "block";
    loadQuestion();
}

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

function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentIndex].correct;

    if (selectedIndex === correctIndex) {
        score++;
        scoreEl.innerText = `✔ ${score}`;

        optionButtons[selectedIndex].style.background = "green";
        statusEl.innerText = "✅ Correct Answer!";
        disableOptions();
        nextBtn.style.display = "block";
    } else {
        optionButtons[selectedIndex].style.background = "red";
        optionButtons[correctIndex].style.background = "green";
        statusEl.innerText = "❌ Wrong Answer! Restarting Quiz...";

        disableOptions();
        setTimeout(startQuiz, 1500);
    }
}

function nextQuestion() {
    currentIndex++;
    loadQuestion();
}

function endQuiz() {
    questionEl.innerText = "🎉 Quiz Completed!\nGreat job! Refresh to play again.";
    document.querySelector(".options").style.display = "none";
    nextBtn.style.display = "none";
    statusEl.innerText = `Final Score: ${score}`;
}

/* ================================
   Initialize Quiz (LAST LINE)
================================ */
startQuiz();
