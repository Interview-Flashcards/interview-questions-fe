import React from 'react';
import styles from '../../styles/styles.css';
import TagList from '../containers/TagList';

export default function App() {
  return (
    <div className={`${styles.wireframe} ${styles.appContainer}`}>
      <TagList />
    </div>
  );
}
