import React from 'react';

// Styles
import styles from './Card.module.css';

export const Card = (props) => {
  return (
    <div className={styles.Card} style={{ ...props.style }}>
      {props.children}
    </div>
  );
};
