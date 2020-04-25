import React from 'react';

// Styles
import styles from './styles.module.css';

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>My Custom Component: {text}</div>;
};

// Components
export { Card } from './components/material/Card/Card';
