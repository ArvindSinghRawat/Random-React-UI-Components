import React from 'react';
import { buttonWrapper } from '../../../hoc/ButtonWrapper';

// Style
import styles from './Button.module.css';

const colorCss = {
  light: styles.Light,
  dark: styles.Dark,
  xdark: styles.XDark
};

const typesCss = {
  inset: styles.Inset,
  defaultIn: styles.DefaultIn,
  defaultOut: styles.DefaultOut
};

export const possibleTypes = Object.keys(typesCss);
export const possibleColor = Object.keys(colorCss);

const ButtonComponent = (props) => {
  console.log(props.finalClass);
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

ButtonComponent.displayName = 'Neumorphic Button';

export const Button = buttonWrapper(
  ButtonComponent,
  [styles.Button],
  colorCss,
  typesCss
);

export default Button;
