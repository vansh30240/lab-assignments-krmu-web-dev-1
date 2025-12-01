
const quizQuestions = [
    { question: "What is the capital of USA?", answer: "Washington DC" },
    { question: "Which player has the most number of centuries in cricket?", answer: "Virat kohli" },
    { question: "What is the largest mammal?", answer: "blue whale" },
    { question: "which team won the Qatar 2025 Grand Prix ?", answer: "RED BULL " },
    { question: "How many states are in india ?", answer: "28" }
];


function runQuiz() {


    let score = 0;


    for (let i = 0; i < quizQuestions.length; i++) {


        let userAnswer = prompt(quizQuestions[i].question);


        if (userAnswer === null) {
            alert("Quiz cancelled!");
            return;
        }

        userAnswer = userAnswer.toLowerCase().trim();

        const correctAnswer = quizQuestions[i].answer.toLowerCase().trim();

 
        if (userAnswer === correctAnswer) {
            score++;

            alert("Correct! 🎉");
        } else {
            alert(`Wrong! The correct answer is: ${quizQuestions[i].answer}`);
        }
    }


    alert(`Quiz Finished!\nYour Score: ${score} / ${quizQuestions.length}`);
}


runQuiz();
