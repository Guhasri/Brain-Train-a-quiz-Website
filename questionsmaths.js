const questions = [{
        question: " What is three fifth of 100?",
        answers: [{
                text: "3",
                correct: false
            }, { text: "5", correct: false },
            { text: "60", correct: true },
            { text: " 20", correct: false },
        ]
    },
    {
        question: " If David’s age is 27 years old in 2011. What was his age in 2003?",
        answers: [{
            text: "37",
            correct: false
        }, {
            text: "20",
            correct: false
        }, {
            text: "19",
            correct: true
        }, {
            text: "17",
            correct: false
        }, ]
    },
    {
        question: " What is the remainder of 21 divided by 7?",
        answers: [
            { text: "Nawab of Pataudi Senior", correct: false },
            { text: " C. K. Nayudu", correct: true },
            { text: "Nawab Mansoor Ali Khan", correct: false },
            { text: "Lala Amarnath", correct: false },
        ]
    },
    {
        question: "What is the year 1982 in Roman Numerals??",
        answers: [
            { text: "MCMLXXXII", correct: true },
            { text: "MMLXXXII", correct: false },
            { text: "MCXXXXXII", correct: false },
            { text: "MCMLXXLII", correct: false },
        ]
    },
    {
        question: "What is next in the following number series: 256, 289, 324, 361 . . . ?",
        answers: [
            { text: "376", correct: false },
            { text: "400", correct: true },
            { text: "456", correct: false },
            { text: "377", correct: false },
        ]
    },
    {
        question: " What is the value of Pi to four individual decimal places?",
        answers: [
            { text: "3.1417", correct: false },
            { text: "3.1421", correct: false },
            { text: "3.1416", correct: true },
            { text: "3.1216", correct: false },
        ]
    },
    {
        question: "How many vertices are present on a cube?",
        answers: [
            { text: "4", correct: false },
            { text: "8", correct: true },
            { text: "6", correct: false },
            { text: "12", correct: false },
        ]
    },
    {
        question: "A car is traveling at the rate of 75 kilometers per hour. How many meters is the car traveling in one minute? ",
        answers: [
            { text: " 250 meters per minute.", correct: false },
            { text: "1250 meters per minute.", correct: true },
            { text: "500 meters per minute.", correct: false },
            { text: " 1000 meters per minute.", correct: false },
        ]
    },
    {
        question: "1250 meters per minute.",
        answers: [
            { text: " 8760 hours.", correct: true },
            { text: "3640 hours.", correct: false },
            { text: " 7860 hours.", correct: false },
            { text: "3760 hours.", correct: false },
        ]
    },
    {
        question: "A man is currently 4 times older than his son. In 10 years, the man will be three times older than his son. What is the man’s age presently?",
        answers: [
            { text: "40", correct: false },
            { text: " 80", correct: true },
            { text: "37", correct: false },
            { text: " 50", correct: false },
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("button");
const nextButton = document.getElementById("next-button");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });


}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);

    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;

    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct == "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton()

{
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }

}



nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz()