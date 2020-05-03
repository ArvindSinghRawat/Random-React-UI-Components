import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Button.module.css';
import { buttonWrapper } from '../../../hoc/ButtonWrapper';

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

const ButtonComponent = (props) => {
  return (
    <button
      className={props.finalClass}
      style={{ ...props.style }}
      onClick={props.onClick ? props.onClick : (event) => {}}
      {...props.htmlAttributes}
    >
      {props.children}
    </button>
  );
};

ButtonComponent.displayName = 'Material Button';

export const Button = buttonWrapper(
  ButtonComponent,
  [styles.Button],
  colorCss,
  typesCss
);

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  htmlAttributes: PropTypes.object,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
};
