export interface Question {
    description: string,
    options: {
        optionA: {
            name: string,
            value: string
        },
        optionB: {
            name: string,
            value: string
        },
        optionC: {
            name: string,
            value: string
        },
        optionD: {
            name: string,
            value: string
        }
    }
    correctAnswer: string
}

export const questionsBank: Question[] = [
    {
        description: 'В чем вопрос - 1?',
        options: {
            optionA: {
                name: 'Ответ A',
                value: 'A'
            },
            optionB: {
                name: 'Ответ B',
                value: 'B'
            },
            optionC: {
                name: 'Ответ C',
                value: 'C'
            },
            optionD: {
                name: 'Ответ D',
                value: 'D'
            },
        },
        correctAnswer: 'B'
    },
    {
        description: 'В чем вопрос - 2?',
        options: {
            optionA: {
                name: 'Ответ A',
                value: 'A'
            },
            optionB: {
                name: 'Ответ B',
                value: 'B'
            },
            optionC: {
                name: 'Ответ C',
                value: 'C'
            },
            optionD: {
                name: 'Ответ D',
                value: 'D'
            },
        },
        correctAnswer: 'B'
    },
    {
        description: 'В чем вопрос - 3 последний?',
        options: {
            optionA: {
                name: 'Ответ A',
                value: 'A'
            },
            optionB: {
                name: 'Ответ B',
                value: 'B'
            },
            optionC: {
                name: 'Ответ C',
                value: 'C'
            },
            optionD: {
                name: 'Ответ D',
                value: 'D'
            },
        },
        correctAnswer: 'B'
    }
];