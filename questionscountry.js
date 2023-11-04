const questions = [{
        question: "In which country are the world's 10 coldest cities located?",
        answers: [
            { text: "United States", correct: false },
            { text: "Canada", correct: false },
            { text: "Sweden", correct: false },
            { text: "Russia", correct: true },
        ]
    },
    {
        question: "Supposedly home to a 'monster', Loch Ness is one of many inland seas-or 'lochs'-in which country",
        answers: [
            { text: "Wales", correct: false },
            { text: "England", correct: false },
            { text: "Ireland", correct: false },
            { text: "Scotland", correct: true },
        ]
    },
    {
        question: "Which country has three capital cities-Pretoria, Cape Town, and Bloemfontein?",
        answers: [
            { text: "Chile", correct: false },
            { text: "Australia", correct: false },
            { text: "Nigeria", correct: false },
            { text: "South Africa", correct: true },
        ]
    },
    {
        question: "Thanks to its overseas territories,which country technically spans 12 time zones? ",
        answers: [
            { text: "France", correct: true },
            { text: "Russia", correct: false },
            { text: "Sweden", correct: false },
            { text: "United States", correct: false },
        ]
    },
    {
        question: "With an area of less than 0.2 square mile, which is the smallest country in the world?",
        answers: [
            { text: "Cyprus", correct: false },
            { text: "Vatican City", correct: true },
            { text: "Malta", correct: false },
            { text: "Barbados", correct: false },
        ]
    },
    {
        question: "Which continent is home to the most countries?",
        answers: [
            { text: "South America", correct: false },
            { text: "Europe", correct: false },
            { text: "Africa", correct: true },
            { text: "Asia", correct: false },
        ]
    },
    {
        question: "Home to languages like Tok Pisin, Hiri Motu, and a German creole known as Unserdeutsch, which is the most linguistically diverse country in the world ?",
        answers: [
            { text: "Brazil", correct: false },
            { text: "Papa New Guinea", correct: true },
            { text: "Nigeria", correct: false },
            { text: "India", correct: false },
        ]
    },
    {
        question: "Which of the following is NOT one of the 13 countries crossed by the Equator?",
        answers: [
            { text: "Kenya", correct: false },
            { text: "Egypt", correct: true },
            { text: "Indonesia", correct: false },
            { text: "Eucador", correct: false },
        ]
    },
    {
        question: "Thanks to the tombs built by the ancient kingdom of Kush, which contry is home to- by far the - most pyramids in the world?",
        answers: [
            { text: "Sudan", correct: true },
            { text: "Colombia", correct: false },
            { text: "Cambodia", correct: false },
            { text: "Mexico", correct: false },
        ]
    },
    {
        question: "How many countries are there in the world?",
        answers: [
            { text: "190", correct: false },
            { text: "195", correct: true },
            { text: "197", correct: false },
            { text: "196", correct: false },
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