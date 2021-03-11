const fetch = require('node-fetch');
require('dotenv').config();

const URL = process.env.REACT_APP_HEROKU_URL;

export const getFlashCards = async() => {
    const res = await fetch(`${URL}`)
    const json = await res.json();

    if (!res.ok) throw 'Unable to load Cards';

    return json.map(flashCards => ({
      id: flashCards.id,
      question: flashCards.question,
      answer: flashCards.answer,
      hint: flashCards.hint,
      category: flashCards.category,
      tags: flashCards.tags,
      links: flashCards.links   
    }));
};
