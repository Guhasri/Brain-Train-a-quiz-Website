const questions = [{
        question: "Vijay Stambh is located in",
        answers: [
            { text: "Udaipur", correct: false },
            { text: "Bundi  ", correct: false },
            { text: " Ajmer", correct: false },
            { text: "Chittorgarh", correct: true },
        ]
    },
    {
        question: "The ‘Indira Pradhan Trophy’ is related to ",
        answers: [
            { text: "Hockey", correct: false },
            { text: "Basketball", correct: false },
            {
                text: "Wrestling ",
                correct: false
            }, { text: "Volleyball", correct: true },
        ]
    },
    {
        question: " Radio Astronomy Center is located in ",
        answers: [
            { text: " Mumbai", correct: false },
            { text: "Sriharikota", correct: false },
            { text: " Hyderabad", correct: false },
            { text: "Udhagamandalam", correct: true },
        ]
    },
    {
        question: "September 16 is celebrated as",
        answers: [
            { text: " World Ozone Day", correct: true },
            { text: " World Environment Day", correct: false },
            { text: "World Ocean Day", correct: false },
            { text: "World Red Cross Day", correct: false },
        ]
    },
    {
        question: "Who is the first Indian Woman Airline (commercial) Pilot",
        answers: [
            { text: "Avani Chaturvedi   ", correct: false },
            { text: "Durba Banerjee", correct: true },
            { text: "Bhawana Kanth", correct: false },
            { text: "Mohana Singh", correct: false },
        ]
    },
    {
        question: "The Intelligence Department ‘Inter-Services Intelligence’ belongs to",
        answers: [
            { text: "Korea", correct: false },
            { text: " Bangladesh", correct: false },
            { text: "Pakistan", correct: true },
            { text: "Spain", correct: false },
        ]
    },
    {
        question: "The book, ‘A View from Outside,’ was written by …",
        answers: [
            { text: " Vikram Seth", correct: false },
            { text: "P. Chidambaram", correct: true },
            { text: "Shashi Tharoor", correct: false },
            { text: "Amitabh Ghosh", correct: false },
        ]
    },
    {
        question: "Who among the following had first introduced the Olympic Games?",
        answers: [
            { text: " Roman", correct: false },
            { text: " Greek", correct: true },
            { text: " Egyptian", correct: false },
            { text: " Chinese", correct: false },
        ]
    },
    {
        question: " National Emblem of Germany is ",
        answers: [
            { text: "Corn Flower", correct: true },
            { text: " Kiwi", correct: false },
            { text: " Lion", correct: false },
            { text: "  Lily", correct: false },
        ]
    },
    {
        question: "Which among the following is popular as Granite City?",
        answers: [
            { text: "New York City", correct: false },
            { text: "Aberdeen", correct: true },
            { text: " Rome", correct: false },
            { text: "Paris", correct: false },
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