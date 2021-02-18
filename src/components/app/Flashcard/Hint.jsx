import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LinkItem from '../LinkItem/LinkItem';
import flashcardStyles from './flashcardStyles.css';

export default function Hint({ hint, links }) {
  const [hintInvisible, setHintInvisible] = useState(true);

  function showHint() {
    hintInvisible ? setHintInvisible(false) : setHintInvisible(true);
  }

  return (
    <div>
      <button onClick={showHint}>{hintInvisible ? 'Show Hint' : 'Hide Hint'}</button>
      <div className={hintInvisible && flashcardStyles.hidden}>{hint}
        <div>
              Links:
          {links.map(link => {
            return (
              <LinkItem key={link} url={link} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

Hint.propTypes = {
  hint: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.string)
};
