import React from 'react';
import PropTypes from 'prop-types';

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

OutlineBox.propTypes = {
  className: PropTypes.string,
  sytle: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
};
