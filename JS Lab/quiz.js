//quiz class
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.index = 0;
    }
    getQuestionByIndex() {
        return this.questions[this.index];
    }
    checkForCorrectAnswer(answer) {
        let question = this.getQuestionByIndex();
        if (question.isCorrectAnswer(answer)) {
            this.score++;
        }
        this.index++;
    }
    isEnded() {
        return this.index === this.questions.length;
    }
}

//Question class
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(selectedChoice) {
        return this.answer === selectedChoice;
    }
}

//questions
const quizQuestions = 
[
    new Question (
        "How far is the service line from the net in tennis?",
        ["25 Feet", "20 Feet", "21 Feet", "19 Feet"],
        "21 Feet"
    ),
    new Question (
        "Where was the Uber Cup 2018 held?",
        ["China", "Bangkok", "Indonesia", "India"],
        "Bangkok"
    ),
    new Question (
        "What is the full form of CPU?",
        ["Central Processing Unit", "Central Primary Unit", "Control Primary Unit", "Control Processing Unit"],
        "Central Processing Unit"
    ),
    new Question (
        "Which of the following is not a classical dance of India?",
        ["Kathak", "Sattriya", "Manipuri", "Bhangra"],
        "Bhangra"
    ),
    new Question (
        "Which among the following is a folk dance of India?",
        ["Manipuri", "Garba", "Kathakali", "Mohiniattam"],
        "Garba"
    ),
    new Question (
        "Garadi is a folk dance of which region?",
        ["Puducherry", "Gujarat", "Mizoram", "Rajasthan"],
        "Puducherry"
    ),
    new Question (
        "Who was the first Olympic Champion?",
        ["Hera", "Pelops", "Coroebus", "Oenomaus"],
        "Coroebus "
    ),
    new Question (
        "Where are the headquarters of World Boxing Council?",
        ["New York", "Melbourne", "Mexico City", "Lausanne"],
        "Mexico City"
    ),
    new Question (
        "Which countries will jointly host the 2023 FIBA Basketball World Cup?",
        ["Argentina, Chile, Brazil", "France, Spain, Portugal", "Indonesia, Japan, Philippines", "United States of America, Canada, Mexico"],
        "Indonesia, Japan, Philippines"
    ),
    new Question (
        "Which golf player is nicknamed as The Golden Bear?",
        ["Bobby Jones", "Tiger Woods", "Gary Player", "Jack Nicklaus"],
        "Jack Nicklaus"
    )
];

function loadQuestions(){
    if(quiz.isEnded()){
        console.log("quiz not ended");
        showFinalScores();
        return;
    }

    //display the question
    let currentQuestion = quiz.getQuestionByIndex();
    console.log(currentQuestion);
    let questionElement = document.getElementById('question');
    questionElement.innerHTML = currentQuestion.text;

    //display the answers
    let displayedChoices = currentQuestion.choices;
    for(let i= 0; i<displayedChoices.length; i++){
        let eachChoiceElement = document.getElementById('choice'+i);
        eachChoiceElement.innerHTML = displayedChoices[i];

        let eachChoiceBtn = document.getElementById('btn'+i);
        eachChoiceBtn.onclick = function(){
            quiz.checkForCorrectAnswer(displayedChoices[i]);
            loadQuestions();
        }
    }

    showProgress();

}

let quiz = new Quiz(quizQuestions);
loadQuestions();

function showProgress(){
    let questionNumber = quiz.index + 1;
    let progressElement = document.getElementById('progress');
    progressElement.innerHTML = `Question ${questionNumber} of ${quiz.questions.length}`;
}

function showFinalScores(){
    let resultPercent = (quiz.score / quizQuestions.length) * 100;
    let scoresHTML = `
        <h1>Results...</h1>
        <h2 id="score">Your score is: ${quiz.score}</h2>
        <h2>Overall percentage is: ${resultPercent}</h2>
        <h1>Congratulations!</h1>
    `;

    let quizCanvas = document.getElementById('quiz');
    quizCanvas.innerHTML = scoresHTML;
}