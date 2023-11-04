const questions = [{
        question: "The first time a woman won the Academy Award for directing was for which movie?",
        answers: [{
                text: "Big",
                correct: false
            }, { text: "Lady Bird", correct: false },
            { text: "The Power of The Dog", correct: false },
            { text: "The Hurt Locker", correct: true },
        ]
    },
    {
        question: "With more than 20 and counting, who holds the record for most Academy Award acting nominations?",
        answers: [{
            text: "Katharine Hepburn",
            correct: false
        }, {
            text: "Jack Nicholson",
            correct: false
        }, {
            text: "Meryl Streep",
            correct: true
        }, {
            text: "Al Pacino",
            correct: false
        }, ]
    },
    {
        question: "One of the Oscars’ most memorable mix-ups, what movie was mistakenly announced as the 2016 best picture instead of the real winner, Moonlight?",
        answers: [
            { text: "Spotlight", correct: false },
            { text: "La La land", correct: true },
            { text: "The Shape of Water", correct: false },
            { text: "Green Book", correct: false },
        ]
    },
    {
        question: "How many Pixar animated films have been released?",
        answers: [
            { text: "26", correct: true },
            { text: "30", correct: false },
            { text: "15", correct: false },
            { text: "23", correct: false },
        ]
    },
    {
        question: "Who possesses the ring of power at the start of the Lord Of The Rings trilogy?",
        answers: [
            { text: "Gandalf", correct: false },
            { text: "Bilbo", correct: true },
            { text: "Sauron", correct: false },
            { text: "Frodo", correct: false },
        ]
    },
    {
        question: "Who Played Hermoine Granger in the Harry Potter series?",
        answers: [
            { text: "Jennifer Lawrence", correct: false },
            { text: "Emma Stone", correct: false },
            { text: "Emma Watson", correct: true },
            { text: "J K Rowling", correct: false },
        ]
    },
    {
        question: "Hindi movie 'FORCE' which had John Abraham and Genelia in the lead is a remake of which Tamil blockbuster movie?",
        answers: [
            { text: "Ayan", correct: false },
            { text: "Kaakha Kaakha", correct: true },
            { text: "Samy", correct: false },
            { text: "Hero", correct: false },
        ]
    },
    {
        question: "'Aanken' was the first Indian movie to be commercially relesed in which country?",
        answers: [
            { text: "Kenya", correct: false },
            { text: "Italy", correct: true },
            { text: "Indonesia", correct: false },
            { text: "Eucador", correct: false },
        ]
    },
    {
        question: "We can find this character in which movie?:  Black widow ",
        answers: [
            { text: "Avengers: Endgame", correct: true },
            { text: "X Men", correct: false },
            { text: "Joker", correct: false },
            { text: "Frozen II", correct: false },
        ]
    },
    {
        question: "In Inception, how many dream levels does the crew enter?",
        answers: [
            { text: "2", correct: false },
            { text: "5", correct: true },
            { text: "4", correct: false },
            { text: "3", correct: false },
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