import React from 'react';
import { useFlashCards } from '../../../hooks/flashCards';
import styles from '../../../styles/styles.css';
import PropTypes from 'prop-types';
import { getTagList } from '../../../api/bannerApi';
import bannerStyles from './bannerStyles.css';

export default function Banner({ chosenTag, onChange }) {
  const { flashCards } = useFlashCards();
  const possibleTagList = getTagList(flashCards);

  function handleTagChange(e) {
    onChange(e.target.value);
  }

  return (
    <div className={bannerStyles.banner}>
      <h1>Interview Questions</h1>
      <label className={bannerStyles.categoriesLabel}>
        <h3>Categories:</h3>
        <select onChange={handleTagChange} value={chosenTag}>
          {
            possibleTagList.map(tag => {
              return(<option key={tag} value={tag}>{tag}</option>)
            })
          }
        </select>
      </label>
    </div>
  );
}

Banner.propTypes = {
  chosenTag: PropTypes.string,
  onChange: PropTypes.func
};
