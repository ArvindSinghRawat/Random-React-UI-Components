import React from 'react';

import { ExampleComponent, Card } from 'random-react-ui-components';
import 'random-react-ui-components/dist/index.css';
import styles from './App.module.css';

const App = () => {
  const commonStyle = {
    width: 300,
    height: 300,
    margin: '15px auto',
    padding: 'auto'
  };

  return (
    <div>
      <ExampleComponent text='Create React Library Example 😄' />
      <h1>Cards</h1>
      <div className='row'>
        <Card style={commonStyle} className={styles.VerticalFlexbox}>
          This is Default Card
        </Card>
        <Card
          type='dark'
          style={commonStyle}
          className={styles.VerticalFlexbox}
        >
          This is Dark Card
        </Card>
        <Card
          type='xdark'
          style={commonStyle}
          className={styles.VerticalFlexbox}
        >
          This is Extra Dark Card
        </Card>
      </div>
    </div>
  );
};

export default App;
