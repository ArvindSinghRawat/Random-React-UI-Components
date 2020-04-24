import React from 'react';

import { ExampleComponent, Card } from 'random-react-ui-components';
import 'random-react-ui-components/dist/index.css';

const App = () => {
  return (
    <div>
      <ExampleComponent text='Create React Library Example 😄' />
      <h1>Card : </h1>
      <Card style={{ width: 500, height: 500, margin: '20px auto' }}>
        This is My Card
      </Card>
    </div>
  );
};

export default App;
