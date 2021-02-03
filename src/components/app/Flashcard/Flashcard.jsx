import React from 'react';
import styles from '../../../styles/styles.css';
import flashcardStyles from './flashcardStyles.css';
import LinkItem from '../LinkItem/LinkItem';

export default function Flashcard() {
  const testData = {
    question: 'In JavaScript what is the difference between null and undefined?',
    answer: 'null is an explicit nothing and has a typeof object, undefined has been declared and not yet assigned and has a typeof undefined. null == undefined //true. null === undefined //false',
    hint: 'One is automatically applied when something is forgotten, the other is intentional.',
    category: 'tech',
    tags: ['JavaScript', 'FrontEndBackEnd'],
    links: ['https://www.youtube.com/watch?v=QVt0XfnU2Hw', 'https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript']
  }

  return (
    <div className={flashcardStyles.flashcard}>

      <h2>{testData.question}</h2>

      <button className={flashcardStyles.hintButton}>Show Hint</button>

      <div className={flashcardStyles.hint}>
        <div>{testData.hint}
        
        <div className={flashcardStyles.linksDiv}>
          Links: 
          {testData.links.map(link => {
            return (
              <LinkItem url={link} />
            )
          })}
        </div>

        </div>
      </div>

      <button className={flashcardStyles.button}>Show Answer</button>

      <div className={flashcardStyles.answer}>
        <p>{testData.answer}</p>
      </div>
    </div>
  )
}
