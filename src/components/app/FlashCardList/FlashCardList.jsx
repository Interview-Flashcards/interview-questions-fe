import React from 'react';
import { useFlashCards } from '../../../hooks/flashCards';
import Flashcard from '../Flashcard/Flashcard';
import { isItemInArray } from '../../../api/bannerApi';
import flashcardStyles from '../Flashcard/flashcardStyles.css';
import CodeChallengeFlashcard from '../CodeChallengeFlashcard/CodeChallengeFlashcard';

export default function FlashCardList({ chosenTag }) {
  const { flashCards } = useFlashCards();

  const allFlashCards = flashCards.filter(flashCard => flashCard.tags.length > 0)
    .map(flashCard => 
      (
      flashCard.category === 'Code Challenges' ?
      <div key={flashCard.id}>
        <CodeChallengeFlashcard {...flashCard} />
      </div>
      :
      <div key={flashCard.id}>
        <Flashcard {...flashCard} />
      </div>
    ));

  const flashCardsByTag = flashCards.filter(flashCard => isItemInArray(flashCard.tags, chosenTag))
    .map(flashCard => (
      flashCard.category === 'Code Challenges' ?
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
      {chosenTag === 'All' ? allFlashCards : flashCardsByTag}
    </div>
  );
}
