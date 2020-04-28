import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Card.module.css';

export const possibleTypes = ['dark', 'xdark'];
const possibleAnimate = ['shadow'];

export const Card = (props) => {
  const cssClasses = [styles.Card, styles.ShadowSmooth];
  if (props.type) {
    const type = props.type.toLowerCase();
    switch (type) {
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
  if (props.animate) {
    const type = props.animate.toLowerCase();
    switch (type) {
      case 'shadow':
        cssClasses.push(styles.ShadowAnimate);
        break;
      default:
        console.log(type + ' animation not found');
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
  type: PropTypes.oneOf(possibleTypes),
  animate: PropTypes.oneOf(possibleAnimate),
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
};

export default Card;
