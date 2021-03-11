import React from 'react';
import { useFlashCards } from '../../../hooks/flashCards';
import Flashcard from '../Flashcard/Flashcard';
import { isItemInArray } from '../../../api/bannerApi';
import flashcardStyles from '../Flashcard/flashcardStyles.css';

export default function FlashCardList({ chosenTag }) {
  const { flashCards } = useFlashCards();

  const allFlashCardElements = flashCards.filter(flashCard => flashCard.tags !== [])
    .map(flashCard => (
      <div key={flashCard.id}>
        <Flashcard {...flashCard} />
      </div>
    ));

  const flashCardElements = flashCards.filter(flashCard => isItemInArray(flashCard.tags, chosenTag))
    .map(flashCard => (
        <div key={flashCard.id}>
          <Flashcard {...flashCard} />
        </div>
      ));

  return (
    <div className={flashcardStyles.flashcardList}>
      {chosenTag === 'All' ? allFlashCardElements : flashCardElements}
    </div>
  );
}
