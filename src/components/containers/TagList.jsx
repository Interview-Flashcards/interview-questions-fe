import React, { useState } from 'react';
import Banner from '../app/Banner/Banner';
import FlashCardList from '../app/FlashCardList/FlashCardList';

export default function TagList() {
  const [chosenTag, setChosenTag] = useState('All');

  function handleTagChange(newValue) {
    setChosenTag(newValue);
  }

  return (
    <>
      <Banner chosenTag={chosenTag} onChange={handleTagChange}/>
      <FlashCardList chosenTag={chosenTag}/>
    </>
  );
}
