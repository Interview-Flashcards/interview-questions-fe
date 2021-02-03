import React from 'react';
import styles from '../../../styles/styles.css';
import flashcardStyles from './flashcardStyles.css';
import LinkItem from '../LinkItem/LinkItem';

export default function Flashcard({ id, question, answer, hint, category, tags, links }) {

  return (
    <div className={flashcardStyles.flashcard}>

      <h2>{question}</h2>

      <button className={flashcardStyles.hintButton}>Show Hint</button>

      <div className={flashcardStyles.hint}>
        <div>{hint}
        
        <div className={flashcardStyles.linksDiv}>
          Links: 
          {links.map(link => {
            return (
              <LinkItem url={link} />
            )
          })}
        </div>

        </div>
      </div>

      <button className={flashcardStyles.button}>Show Answer</button>

      <div className={flashcardStyles.answer}>
        <p>{answer}</p>
      </div>
    </div>
  )
}
