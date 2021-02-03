import React from 'react';
import { useFlashCards } from '../../../hooks/flashCards';
import Flashcard from '../Flashcard/Flashcard';

export default function FlashCardList() {
    const { flashCards } = useFlashCards();

    const flashCardsElements = flashCards.map(flashCard => (
        <div key={flashCard.id}>
            <Flashcard {...flashCard} />
        </div>
    ));

    return (
        <div>
            {flashCardsElements}
        </div>
    );
};
