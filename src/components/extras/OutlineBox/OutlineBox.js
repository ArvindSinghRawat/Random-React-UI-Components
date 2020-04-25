import React from 'react';

// Style
import styles from './OutlineBox.module.css';

export const OutlineBox = (props) => {
  const cssClasses = [styles.OutlineBox, styles.Rounded];
  return (
    <div
      className={cssClasses.join(' ') + ' ' + props.className}
      style={{ ...props.style }}
    >
      {props.children}
    </div>
  );
};
