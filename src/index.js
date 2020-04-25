import React from 'react';

// Styles
import styles from './styles.module.css';

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>My Custom Component: {text}</div>;
};

// Components
export { Card as MaterialCard } from './components/material/Card/Card';
export { Card as NeumorphicCard } from './components/neumorphic/Card/Card';
export { OutlineBox } from './components/extras/OutlineBox/OutlineBox';
