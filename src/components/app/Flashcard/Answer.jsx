import React, { useState } from 'react';
import PropTypes from 'prop-types';
import flashcardStyles from './flashcardStyles.css';

export default function Answer({ answer }) {
  const [answerInvisible, setAnswerInvisible] = useState(true);

  function showAnswer() {
    answerInvisible ? setAnswerInvisible(false) : setAnswerInvisible(true);
  }

  return (
    <div>
      {answer === '' ? null : <>
        <button onClick={showAnswer}>{answerInvisible ? 'Show Answer' : 'Hide Answer'}</button>
        <div className={answerInvisible ? flashcardStyles.hidden : flashcardStyles.answer}>
          <p>{answer}</p>
        </div>
      </>}
    </div>
  );
}

Answer.propTypes = {
  answer: PropTypes.string.isRequired
};
