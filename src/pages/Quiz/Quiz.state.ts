import {useEffect, useState} from "react";
import {questionsBank} from "../../static/QuestionsBank";

export const useQuizState = () => {
    const [rightAnswersCount, setRightAnswersCount] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [quizOver, setQuizOver] = useState(false);
    const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState(questionsBank[currentQuestion].correctAnswer);

    useEffect(() => {
        setCurrentAnswer('');
        setCurrentCorrectAnswer(questionsBank[currentQuestion].correctAnswer)
    }, [currentQuestion]);

    return {
        currentQuestion,
        setCurrentQuestion,
        currentAnswer,
        setCurrentAnswer,
        quizOver,
        setQuizOver,
        currentCorrectAnswer,
        setCurrentCorrectAnswer,
        rightAnswersCount,
        setRightAnswersCount
    }
}