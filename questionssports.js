const questions = [{
        question: "Who among the following has written the book Cricket My Style?",
        answers: [{
                text: "Sunil Gavaskar",
                correct: false
            }, { text: "Anil Kumble", correct: false },
            { text: "Kapil Dev", correct: true },
            { text: " None of them", correct: false },
        ]
    },
    {
        question: "Grand Slam is used in which of the following games?",
        answers: [{
            text: "Football",
            correct: false
        }, {
            text: "Baseball",
            correct: false
        }, {
            text: "Lawn Tennis",
            correct: true
        }, {
            text: "Badminton",
            correct: false
        }, ]
    },
    {
        question: "Who among the following served as India’s first Test Captain?",
        answers: [
            { text: "Nawab of Pataudi Senior", correct: false },
            { text: " C. K. Nayudu", correct: true },
            { text: "Nawab Mansoor Ali Khan", correct: false },
            { text: "Lala Amarnath", correct: false },
        ]
    },
    {
        question: "Who among the following is the first Indian to score a century in Indian Premier League (IPL)?",
        answers: [
            { text: "Manish Pandey", correct: true },
            { text: "Gautam Gambhir", correct: false },
            { text: "Sachin", correct: false },
            { text: "Virat Kholi", correct: false },
        ]
    },
    {
        question: "Which country does Allyson Felix belong to?",
        answers: [
            { text: "Jamaica", correct: false },
            { text: "US", correct: true },
            { text: "UK", correct: false },
            { text: "Ireland", correct: false },
        ]
    },
    {
        question: "Who was the first marketing director of the International Olympic Committee?",
        answers: [
            { text: "Juan Antonio", correct: false },
            { text: "Juan Antonio", correct: false },
            { text: " Michael Payne", correct: true },
            { text: "Avery Brundage", correct: false },
        ]
    },
    {
        question: "Who is the coach of Saina Nehwal?",
        answers: [
            { text: "Vrushali Gummadi", correct: false },
            { text: "Pullela Gopichand", correct: true },
            { text: "Tan Kim Her", correct: false },
            { text: "Both A and C", correct: false },
        ]
    },
    {
        question: "What is the meaning of the phrase umpire calling stumps?",
        answers: [
            { text: " The batsman is out", correct: false },
            { text: "The play is over for the day", correct: true },
            { text: "It is a no ball", correct: false },
            { text: " The whole match is over", correct: false },
        ]
    },
    {
        question: "Where are the headquarters of Commonwealth Games Federation?",
        answers: [
            { text: " London", correct: true },
            { text: "Manchester", correct: false },
            { text: " Birmingam", correct: false },
            { text: " Kesington", correct: false },
        ]
    },
    {
        question: "Which country leads the all-time medal table for the summer Olympics?",
        answers: [
            { text: " China", correct: false },
            { text: "United States of America", correct: true },
            { text: "Russia", correct: false },
            { text: " Germany", correct: false },
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