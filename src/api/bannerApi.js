export function getTagList(flashCards) {

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

    for(let j = 0; j < currentFlashCard.tags.length; j++) {
      const currentTag = currentFlashCard.tags[j];

      if(currentTag !== '' && !isItemInArray(possibleTagList, currentTag)) {
        possibleTagList.push(currentTag);
      }
    }
  }

  return possibleTagList;

};
