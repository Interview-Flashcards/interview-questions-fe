import React from 'react';
import styles from '../../styles/styles.css';
import TagList from '../containers/TagList';
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';

export default function App() {
  return (
    <div className={`${styles.wireframe} ${styles.appContainer}`}>
      <TagList />
      <ScrollUpButton style={{ background: 'transparent', outline: 'none', fill: 'var(--color1-transparent)', width: '27px', height: '27px' }} />
    </div>
  );
}
