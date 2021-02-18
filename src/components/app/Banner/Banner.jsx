import React from 'react';
import { useFlashCards } from '../../../hooks/flashCards';
import styles from '../../../styles/styles.css';
import PropTypes from 'prop-types';

export default function Banner({ chosenTag, onChange }) {
  const { flashCards } = useFlashCards();
  const possibleTagList = ['All'];



  function isItemInArray(array, item) {
    for(let i = 0; i < array.length; i++) {
      if(item === array[i]) {
        return true;
      }
    }
    return false;
  }

  for(let i = 0; i < flashCards.length; i++) {
    const currentFlashCard = flashCards[i];

    console.log('current flash card', currentFlashCard);

    for(let j = 0; j < currentFlashCard.tags.length; j++) {
      const currentTag = currentFlashCard.tags[j];

      console.log('current tag', currentTag, isItemInArray(possibleTagList, currentTag));

      if(currentTag !== '' && !isItemInArray(possibleTagList, currentTag)) {
        possibleTagList.push(currentTag);
      }
    }
  }

  //maybe order array
  console.log('possible', possibleTagList);

  function handleTagChange(e) {
    onChange(e.target.value);
  }

  return (
    <div className={`${styles.wireframe} ${styles.banner}`}>
      <h1>Banner</h1>
      <input value={chosenTag} onChange={handleTagChange} />
    </div>
  );
}

Banner.propTypes = {
  chosenTag: PropTypes.string,
  onChange: PropTypes.func
};
