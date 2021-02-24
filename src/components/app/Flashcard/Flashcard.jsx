import React from 'react';
import flashcardStyles from './flashcardStyles.css';
import Hint from './Hint';
import Answer from './Answer';
import PropTypes from 'prop-types';

export default function Flashcard({ id, question, answer, hint, category, tags, links }) {

  return (
    <div className={flashcardStyles.flashcard}>
      <h2 className={flashcardStyles.question}>{question}</h2>
      <Hint hint={hint} links={links}/>
      <Answer answer={answer} />
    </div>
  );
}

Flashcard.propTypes = {
  id: PropTypes.string,
  question: PropTypes.string,
  answer: PropTypes.string,
  hint: PropTypes.string,
  category: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.string)
};
