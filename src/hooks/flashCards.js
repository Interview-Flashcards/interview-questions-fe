import { useEffect, useState } from 'react';
import { getFlashCards } from '../Services/flashCardsApi';

export const useFlashCards = () => {
    const [flashCards, setFlashCards] = useState([]);

    useEffect(() => {
        getFlashCards()
            .then(fetchedFlashcards => setFlashCards(fetchedFlashcards))
    }, []);

    return {
        flashCards
    };
};