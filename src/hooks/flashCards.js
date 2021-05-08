import { useEffect, useState } from 'react';
import { getFlashCards } from '../Services/flashCardsApi';

export const useFlashCards = () => {
    const [loading, setLoading] = useState(true);
    const [flashCards, setFlashCards] = useState([]);

    useEffect(() => {
        getFlashCards()
            .then(fetchedFlashcards => setFlashCards(fetchedFlashcards))
            .finally(() => setLoading(false));
    }, []);

    return {
        loading,
        flashCards
    };
};
