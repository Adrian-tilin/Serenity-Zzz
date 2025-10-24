const levels = [
    {
        name: "Nivel 1",
        questionPool: level1Pool,
    },
    {
        name: "Nivel 2",
        questionPool: level2Pool,
    },
    {
        name: "Nivel 3",
        questionPool: level3Pool,
    },
    {
        name: "Nivel 4",
        questionPool: level3Pool, // Placeholder, use level3 for now
    },
    {
        name: "Nivel 5",
        questionPool: level3Pool,
    },
    {
        name: "Nivel 6",
        questionPool: level3Pool,
    },
    {
        name: "Nivel 7",
        questionPool: level3Pool,
    },
    {
        name: "Nivel 8",
        questionPool: level3Pool,
    },
    {
        name: "Nivel 9",
        questionPool: level3Pool,
    },
    {
        name: "Nivel 10",
        questionPool: level3Pool,
    }
];

let currentLevel = 0;
let currentQuestionIndex = 0;
let score = 0;
let unlockedLevels = 1; // Start with level 1 unlocked

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const levelSelection = document.getElementById('level-selection');
const quizArea = document.getElementById('quiz-area');
const levelsGrid = document.getElementById('levels-grid');
const questionElement = document.getElementById('question');
const optionsGrid = document.getElementById('options-grid');
const feedbackElement = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const currentScoreElement = document.getElementById('current-score');
const questionsAnsweredElement = document.getElementById('questions-answered');
const currentLevelSection = document.getElementById('current-level-section');
const startBtn = document.getElementById('start-btn');
const footer = document.querySelector('footer');
const resultsSection = document.getElementById('results-section');
const finalScoreElement = document.getElementById('final-score');
const correctCountElement = document.getElementById('correct-count');
const percentageElement = document.getElementById('percentage');
const resultsMessageElement = document.getElementById('results-message');
const backToLevelsBtn = document.getElementById('back-to-levels-btn');
const nextLevelBtn = document.getElementById('next-level-btn');

function initGame() {
    showLevels();
}

function showLevels() {
    levelSelection.style.display = 'block';
    quizArea.style.display = 'none';
    footer.style.display = 'none';

    const levelBtns = document.querySelectorAll('.level-btn');
    levelBtns.forEach((btn, index) => {
        btn.classList.remove('active');
        if (index >= unlockedLevels) {
            btn.classList.add('locked');
            btn.disabled = true;
        } else {
            btn.classList.remove('locked');
            btn.disabled = false;
            btn.addEventListener('click', () => selectLevel(index));
        }
    });

    // Show current level section
    if (unlockedLevels < levels.length) {
        currentLevelSection.style.display = 'block';
        startBtn.onclick = () => selectLevel(unlockedLevels);
    } else {
        currentLevelSection.style.display = 'none';
    }

    // Highlight active level (next to unlock)
    if (unlockedLevels < levelBtns.length) {
        levelBtns[unlockedLevels].classList.add('active');
    }

    // Update path to connect circles
    updatePath();
}

function updatePath() {
    const levelNodes = document.querySelectorAll('.level-node');
    const points = [];
    const pathElement = document.querySelector('.level-path');
    const pathRect = pathElement.getBoundingClientRect();
    levelNodes.forEach(node => {
        const rect = node.getBoundingClientRect();
        const x = rect.left + rect.width / 2 - pathRect.left;
        const y = rect.top + rect.height / 2 - pathRect.top;
        points.push({x, y});
    });

    if (points.length < 2) return;

    let d = `M ${points[0].x} ${points[0].y}`;
    let waveOffset = 120;
    for (let i = 1; i < points.length; i++) {
        const prev = points[i-1];
        const curr = points[i];
        const dx = curr.x - prev.x;
        const dy = curr.y - prev.y;
        const x1 = prev.x + dx / 3;
        const y1 = prev.y + dy / 2 + waveOffset;
        const x2 = curr.x - dx / 3;
        const y2 = curr.y - dy / 2 + waveOffset;
        d += ` C ${x1} ${y1} ${x2} ${y2} ${curr.x} ${curr.y}`;
        waveOffset = -waveOffset; // alternate
    }

    const svg = document.querySelector('.path-svg');
    if (svg) {
        svg.setAttribute('viewBox', `0 0 ${pathRect.width} ${pathRect.height}`);
    }
    const path = document.getElementById('level-path-curve');
    if (path) {
        path.setAttribute('d', d);
    }
}

function selectLevel(levelIndex) {
    currentLevel = levelIndex;
    currentQuestionIndex = 0;
    score = 0;
    levelSelection.style.display = 'none';
    quizArea.style.display = 'block';
    footer.style.display = 'none';

    // Select 15 random questions from pool
    const shuffledPool = shuffleArray([...levels[currentLevel].questionPool]);
    levels[currentLevel].questions = shuffledPool.slice(0, 15);

    updateUI();
    showQuestion();
}

function updateUI() {
    currentScoreElement.textContent = score;
    questionsAnsweredElement.textContent = currentQuestionIndex;
    const totalQuestions = levels[currentLevel].questions.length;
    const progress = (currentQuestionIndex / totalQuestions) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `Pregunta ${currentQuestionIndex + 1} de ${totalQuestions}`;
}

function showQuestion() {
    const question = levels[currentLevel].questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    feedbackElement.style.display = 'none';
    feedbackElement.textContent = '';
    nextBtn.disabled = true;

    optionsGrid.innerHTML = '';

    // Shuffle options
    const shuffledOptions = shuffleArray([...question.options]);
    const correctIndex = shuffledOptions.indexOf(question.options[question.correct]);

    shuffledOptions.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.disabled = false; // Ensure enabled
        button.addEventListener('click', () => selectAnswer(button, index === correctIndex));
        optionsGrid.appendChild(button);
    });
}

function selectAnswer(selectedButton, isCorrect) {
    const question = levels[currentLevel].questions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn) => {
        btn.disabled = true; // Disable all buttons after selection
        if (btn === selectedButton) {
            if (isCorrect) {
                btn.classList.add('selected-correct');
                score++;
                feedbackElement.textContent = '¡Correcto!';
                feedbackElement.className = 'correct';
            } else {
                btn.classList.add('selected-incorrect');
                feedbackElement.textContent = 'Incorrecto. La respuesta correcta es: ' + question.options[question.correct];
                feedbackElement.className = 'incorrect';
            }
        }
    });

    feedbackElement.style.display = 'inline-flex';
    nextBtn.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < levels[currentLevel].questions.length) {
        updateUI();
        showQuestion();
    } else {
        endLevel();
    }
}

function endLevel() {
    const totalQuestions = levels[currentLevel].questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);

    // Populate results
    finalScoreElement.textContent = `${score} / ${totalQuestions}`;
    correctCountElement.textContent = score;
    percentageElement.textContent = `${percentage}%`;

    let message = '';
    if (percentage >= 90) {
        message = '¡Excelente trabajo! Eres un experto en psicología.';
    } else if (percentage >= 70) {
        message = '¡Buen trabajo! Has aprobado el nivel.';
    } else {
        message = 'Sigue practicando. ¡Puedes mejorar!';
    }
    resultsMessageElement.textContent = message;

    // Unlock next level if score is good
    if (score >= totalQuestions * 0.7) { // 70% correct
        unlockedLevels = Math.max(unlockedLevels, currentLevel + 2);
        if (currentLevel + 1 < levels.length) {
            nextLevelBtn.style.display = 'inline-block';
        }
    } else {
        resultsMessageElement.textContent += ' No lograste la meta de 70% de respuestas correctas y no podrás avanzar al siguiente nivel.';
    }

    // Hide quiz, show results
    quizArea.style.display = 'none';
    resultsSection.style.display = 'flex';
}

function backToLevels() {
    backBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
    footer.style.display = 'none';
    showLevels();
}

nextBtn.addEventListener('click', nextQuestion);
backBtn.addEventListener('click', backToLevels);

backToLevelsBtn.addEventListener('click', () => {
    resultsSection.style.display = 'none';
    showLevels();
});

nextLevelBtn.addEventListener('click', () => {
    resultsSection.style.display = 'none';
    selectLevel(currentLevel + 1);
});

window.addEventListener('load', initGame);
window.addEventListener('resize', updatePath);