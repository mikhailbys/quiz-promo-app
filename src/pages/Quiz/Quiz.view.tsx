import {Page} from "../../components/Page";
import React from "react";
import {Question, questionsBank} from "../../static/QuestionsBank";
import {RadioGroup} from "../../components/RadioGroup";
import './Quiz.styles.css';
import {useQuizState} from "./Quiz.state";
import {Button} from "../../components/Button";

interface Props {

}

export const Quiz = (props: Props) => {
    const {
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
    } = useQuizState();

    console.log(currentQuestion)
    console.log(currentAnswer)

    const handleAnswer = () => {
        console.log('2');
        if (currentAnswer === currentCorrectAnswer) {
            setRightAnswersCount(rightAnswersCount + 1);
        }
        if (currentQuestion === questionsBank.length - 1) {
            setQuizOver(true);
            return;
        }
        setCurrentQuestion(currentQuestion + 1);
    }

    const renderQuestion = (question: Question) => {
        return (
            <>
                <div className='question-card'>
                    <p>{question.description}</p>
                </div>
                <RadioGroup
                    options={question.options}
                    setValue={setCurrentAnswer}
                    currentValue={currentAnswer}
                />
            </>

        );
    }

    // todo form
    const renderQuiz = () => {
        return (
            <>
                <div className='question-container'>
                    {renderQuestion(questionsBank[currentQuestion])}
                    {/* todo */}
                </div>
                <Button
                    label='Ответить'
                    onClick={handleAnswer}
                    disabled={currentAnswer === ''}
                />
            </>
        );
    }

    // todo
    const renderResult = (rightAnswersCount: number) => {

        return <div>{`Результат ваш ${rightAnswersCount}`}</div>;
    }

    return (
        <Page>
            <div className='quiz-container'>
                <div className='quiz-header'>{quizOver ? 'Результат' : 'Квиз'}</div>
                {!quizOver ? renderQuiz() : renderResult(rightAnswersCount)}
            </div>
        </Page>
    );
}