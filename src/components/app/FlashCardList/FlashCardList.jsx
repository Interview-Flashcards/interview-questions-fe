import React from 'react';
import { useFlashCards } from '../../../hooks/flashCards';
import Flashcard from '../Flashcard/Flashcard';
import { isItemInArray } from '../../../api/bannerApi';
import flashcardStyles from '../Flashcard/flashcardStyles.css';
import CodeChallengeFlashcard from '../CodeChallengeFlashcard/CodeChallengeFlashcard';

export default function FlashCardList({ chosenTag }) {
  const { flashCards } = useFlashCards();

  const allFlashCardElements = flashCards.filter(flashCard => flashCard.tags !== [])
    .map(flashCard => (
      flashCard.category === 'code challenges' ?
      <div key={flashCard.id}>
        <CodeChallengeFlashcard {...flashCard} />
      </div>
      :
      <div key={flashCard.id}>
        <Flashcard {...flashCard} />
      </div>
    ));

  const flashCardElements = flashCards.filter(flashCard => isItemInArray(flashCard.tags, chosenTag))
    .map(flashCard => (
      flashCard.category === 'code challenges' ?
      <div key={flashCard.id}>
        <CodeChallengeFlashcard {...flashCard} />
      </div>
      :
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
