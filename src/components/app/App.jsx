import React from 'react';
import Banner from './Banner/Banner';
import styles from '../../styles/styles.css';
import QuestionItem from './Flashcard/Flashcard';
import Flashcard from './Flashcard/Flashcard';

export default function App() {
  return (
    <div className={`${styles.wireframe} ${styles.appContainer}`}>
      <Banner />
      <Flashcard />
    </div>
    );
}
