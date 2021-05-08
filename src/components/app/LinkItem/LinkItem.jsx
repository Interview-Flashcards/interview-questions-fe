import React from 'react';
import styles from '../../../styles/styles.css';
import flashcardStyles from '../Flashcard/flashcardStyles.css';

export default function LinkItem({ url, name }) {
  return (
    <a className={flashcardStyles.linkItem} href={url} target="_blank">{name}</a>
  )
}
