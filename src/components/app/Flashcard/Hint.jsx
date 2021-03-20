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
    <div className={flashcardStyles.hintDiv}>
      {links.length === 0 && hint === '' ? null : <> 

        <button onClick={showHint} className={flashcardStyles.hintButton}>{hintInvisible ? 'Show Hint' : 'Hide Hint'}</button>

        <div className={hintInvisible ? flashcardStyles.hidden : flashcardStyles.hint}>{hint}
          {links.length !== 0 && 
            <div className={flashcardStyles.linksDiv}>
              Reference Links:
              {links.map(linkObject => {
                return (
                  <LinkItem key={linkObject.linkName} url={linkObject.link} name={linkObject.linkName} />
                );
              })}
            </div>
          }
        </div> 
      </>}
    </div>
  );
}

Hint.propTypes = {
  hint: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object)
};
