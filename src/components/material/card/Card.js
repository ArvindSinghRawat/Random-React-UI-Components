import React from 'react';

// Styles
import styles from './Card.module.css';

export const Card = (props) => {
  const cssClasses = [styles.Card, styles.ShadowSmooth];
  if (props.type) {
    const type = props.type.toLowerCase();
    switch (props.type) {
      case 'dark':
        cssClasses.push(styles.dark);
        break;
      case 'xdark':
        cssClasses.push(styles.xdark);
        break;
      default:
        console.log(type + ' type not found');
        break;
    }
  }
  return (
    <div
      className={cssClasses.join(' ') + ' ' + props.className}
      style={{ ...props.style }}
    >
      {props.children}
    </div>
  );
};
