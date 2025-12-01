// Two simple arrays
let questions = [
    "Capital of France?",
    "Red Planet?",
    "5 + 7?",
    "Language used to style web pages?",
    "Who created JavaScript?"
];

let answers = [
    "paris",
    "mars",
    "12",
    "css",
    "brendan eich"
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i]);
    userAnswer = userAnswer.toLowerCase().trim();

    if (userAnswer === answers[i]) {
        alert("Correct!");
        score++;
    } else {
        alert("Wrong! Correct answer: " + answers[i]);
    }
}

alert("Final Score: " + score + " / " + questions.length);