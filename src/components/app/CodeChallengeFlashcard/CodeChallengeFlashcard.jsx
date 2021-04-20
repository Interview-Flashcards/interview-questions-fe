import React from 'react';
import flashcardStyles from '../Flashcard/flashcardStyles.css';
import PropTypes from 'prop-types';
import LinkItem from '../LinkItem/LinkItem'; 

export default function CodeChallengeFlashcard({ id, question, answer, hint, links }) {

  return (
    <div className={flashcardStyles.flashcard}>
      <h2 className={flashcardStyles.question}>{question}</h2>
      
      { answer !== '' ? 
      <h3>{answer}</h3> : null}

      <h3>Level: {hint}</h3>
      <LinkItem url={links[0].link} name={links[0].linkName}/>
    </div>
  );
}

CodeChallengeFlashcard.propTypes = {
  id: PropTypes.string,
  question: PropTypes.string,
  answer: PropTypes.string,
  hint: PropTypes.string,
  category: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object)
};
