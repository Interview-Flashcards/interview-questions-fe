import React from 'react';
import styles from '../../styles/styles.css';
import TagList from '../containers/TagList';

import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';

export default function App() {
  return (
    <div className={`${styles.wireframe} ${styles.appContainer}`}>
      <TagList />
      <ScrollUpButton style={{ background: 'transparent', outline: 'none', fill: 'var(--themeColor2)', width: '30px', height: '30px' }} />
    </div>
  );
}
