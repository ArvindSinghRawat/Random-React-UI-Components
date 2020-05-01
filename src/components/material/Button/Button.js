import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Button.module.css';

const colorCss = {
  primary: styles.Primary,
  dark: styles.Dark,
  success: styles.Success,
  warning: styles.Warning,
  danger: styles.Danger
};

const typesCss = {
  outline: styles.Outline,
  none: styles.None
};

export const possibleTypes = Object.keys(typesCss);
export const possibleColor = Object.keys(colorCss);

export const Button = (props) => {
  const cssClasses = [styles.Button];

  const type = [];
  const color = [];

  const receivedType = props.type ? props.type.split(/[ ,-]+/) : [];
  for (const element of receivedType) {
    let temp = possibleColor.indexOf(element);
    if (temp !== -1) {
      color.push(colorCss[element]);
    } else {
      temp = possibleTypes.indexOf(element);
      if (temp !== -1) {
        type.push(typesCss[element]);
      } else {
        console.log(`${element} not known as type`);
      }
    }
  }

  if (color.length > 1) {
    console.log(
      `Should receive only a single Color class but received ${color.length}. But Classes Received: ${color}`
    );
    cssClasses.push(color.pop());
  } else if (color.length === 1) {
    cssClasses.push(color.pop());
  }

  if (type.length > 1) {
    console.log(
      `Should receive only a single Type class but received ${type.length}. But Classes Received: ${type}`
    );
    cssClasses.push(type.pop());
  } else if (type.length === 1) {
    cssClasses.push(type.pop());
  }

  const finalClass = (
    cssClasses.join(' ') + (props.className ? ' ' + props.className : '')
  ).trimRight();

  return (
    <button
      className={finalClass}
      style={{ ...props.style }}
      onClick={props.onClick ? props.onClick : (event) => {}}
      {...props.htmlAttributes}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  htmlAttributes: PropTypes.object,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
};

export default Button;
