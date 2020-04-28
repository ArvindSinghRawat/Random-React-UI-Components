import React from 'react';
import PropTypes from 'prop-types';

// Style
import styles from './OutlineBox.module.css';

export const OutlineBox = (props) => {
  const cssClasses = [styles.OutlineBox, styles.Rounded];
  const finalClass = (
    cssClasses.join(' ') + (props.className ? ' ' + props.className : '')
  ).trimRight();
  return (
    <div className={finalClass} style={{ ...props.style }}>
      {props.children}
    </div>
  );
};

OutlineBox.propTypes = {
  className: PropTypes.string,
  sytle: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
};
