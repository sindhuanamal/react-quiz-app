import React from 'react';
//types
import { AnswerObject } from '../App';
//styles
import { Wrapper, ButtonWrapper } from '../styles/QuestionCard.styles';

type Props = {
  questionNumber: number;
  totalQuestions: number;
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void; 
  userAnswer: AnswerObject | undefined;
};

const QuestionCard:React.FC<Props>= ({
  questionNumber,
  totalQuestions,
  question,
  answers,
  userAnswer,
  callback,
}) => (
  <Wrapper>
    <p className='number'>
      Question: {questionNumber} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuestionCard;