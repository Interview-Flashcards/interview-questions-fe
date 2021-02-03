import React from 'react';
import Banner from './Banner/Banner';
import styles from '../../styles/styles.css';
import Flashcard from './Flashcard/Flashcard';
import FlashCardList from './FlashCardList/FlashCardList';

export default function App() {
  return (
    <div className={`${styles.wireframe} ${styles.appContainer}`}>
      <Banner />
      <FlashCardList />
    </div>
    );
}
