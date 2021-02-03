import React from 'react';
import styles from '../../../styles/styles.css';
import flashcardStyles from '../Flashcard/flashcardStyles.css';

export default function LinkItem({ url }) {
  return (
    <a className={`${styles.wireframe} ${flashcardStyles.linkItem}`} href={url} target="_blank">{url}</a>
  )
}
