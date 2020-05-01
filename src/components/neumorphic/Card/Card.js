import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Card.module.css';

export const possibleType = [
  'dark',
  'xdark',
  'inset',
  'light',
  'inset-dark',
  'inset-xdark',
  'inset-light'
];

export const Card = (props) => {
  const cssClasses = [styles.Card];
  if (props.type) {
    const type = props.type.toLowerCase();
    switch (type) {
      case 'light':
        cssClasses.push(styles.light);
        break;
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
      case 'inset-light':
        cssClasses.push(styles.light);
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
  const finalClass = (
    cssClasses.join(' ') + (props.className ? ' ' + props.className : '')
  ).trimRight();
  return (
    <div className={finalClass} style={{ ...props.style }}>
      {props.children}
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.oneOf(possibleType),
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
};
