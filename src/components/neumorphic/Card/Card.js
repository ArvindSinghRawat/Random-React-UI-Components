import React from 'react';

// Styles
import styles from './Card.module.css';

export const Card = (props) => {
  const cssClasses = [styles.Card];
  if (props.type) {
    const type = props.type.toLowerCase();
    switch (type) {
      case 'dark':
        cssClasses.push(styles.dark);
        break;
      case 'xdark':
        cssClasses.push(styles.xdark);
        break;
      case 'inset':
        cssClasses.push(styles.Inset);
        break;
      case 'inset-dark':
        cssClasses.push(styles.dark);
        cssClasses.push(styles.Inset);
        break;
      case 'inset-xdark':
        cssClasses.push(styles.xdark);
        cssClasses.push(styles.Inset);
        break;
      default:
        console.log(type + ' type not found');
        break;
    }
  }
  //   if (props.animate) {
  //     const type = props.animate.toLowerCase();
  //     switch (type) {
  //       case 'shadow':
  //         cssClasses.push(styles.ShadowAnimate);
  //         break;
  //       default:
  //         break;
  //     }
  // }
  return (
    <div
      className={cssClasses.join(' ') + ' ' + props.className}
      style={{ ...props.style }}
    >
      {props.children}
    </div>
  );
};
