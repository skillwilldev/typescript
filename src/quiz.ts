type Question = {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
};

const questions: Question[] = [
    {
        id: 1,
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        correctAnswer: "Tokyo",
    },
    {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
    },
    {
        id: 3,
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: [
            "Charles Dickens",
            "Leo Tolstoy",
            "William Shakespeare",
            "Mark Twain",
        ],
        correctAnswer: "William Shakespeare",
    },
    {
        id: 4,
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Gl", "Au"],
        correctAnswer: "Au",
    },
    {
        id: 5,
        question: "How many continents are there on Earth?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7",
    },
    {
        id: 6,
        question:
            "Which data structure operates on a LIFO (Last In, First Out) principle?",
        options: ["Queue", "Stack", "Linked List", "Tree"],
        correctAnswer: "Stack",
    },
    {
        id: 7,
        question: "What is the largest ocean on Earth?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean",
            "Pacific Ocean",
        ],
        correctAnswer: "Pacific Ocean",
    },
    {
        id: 8,
        question: "In what year did the first Moon landing occur?",
        options: ["1965", "1967", "1969", "1971"],
        correctAnswer: "1969",
    },
    {
        id: 9,
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style Syntax",
            "Coded Style System",
        ],
        correctAnswer: "Cascading Style Sheets",
    },
    {
        id: 10,
        question: "Which element has the atomic number 1?",
        options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
        correctAnswer: "Hydrogen",
    },
];


function displayQuestion(q: Question): void {
    console.log(`\nquestion №${q.id}: ${q.question}`);
    q.options.forEach((option, index) => {
        console.log(`  ${index + 1}. ${option}`);
    });
}

function checkAnswer(q: Question, answer: string): boolean {
    return q.correctAnswer === answer;
}

questions.forEach((question) => {
    displayQuestion(question);

    const userAnswer = question.options[5];

    const result = checkAnswer(question, userAnswer ?? '');

    console.log(
        result ? "Correct" : "Wrong "
    );
});