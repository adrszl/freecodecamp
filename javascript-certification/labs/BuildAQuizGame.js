const questions = [
    {
        category: 'category 1',
        question: 'question 1?',
        choices: [
            'answer 1',
            'choice 2',
            'choice 3'
        ],
        answer: 'answer 1'
    },
    {
        category: 'category 2',
        question: 'question 2?',
        choices: [
            'choice 1',
            'answer 2',
            'choice 3'
        ],
        answer: 'answer 2'
    },
    {
        category: 'category 3',
        question: 'question 3?',
        choices: [
            'choice 1',
            'choice 2',
            'answer 3'
        ],
        answer: 'answer 3'
    },
    {
        category: 'category 4',
        question: 'question 4?',
        choices: [
            'answer 4',
            'choice 2',
            'choice 3'
        ],
        answer: 'answer 4'
    },
    {
        category: 'category 5',
        question: 'question 5?',
        choices: [
            'choice 1',
            'answer 5',
            'choice 3'
        ],
        answer: 'answer 5'
    }
];

const getRandomQuestion = (questionsArray) => {
    const randomNumber = Math.floor(Math.random() * 5);

    return questionsArray[randomNumber];
}

const getRandomComputerChoice = (choices) => {
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}

const randomQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQuestion.choices);

const getResults = (questionObject, computerChoiceOfTheAnswer) => {
    if (questionObject.answer === computerChoiceOfTheAnswer) return "The computer's choice is correct!";
    else return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
}