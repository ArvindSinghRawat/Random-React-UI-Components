import React from 'react';

import {
  ExampleComponent,
  MaterialCard,
  NeumorphicCard,
  OutlineBox,
  MaterialButton
} from 'random-react-ui-components';
import 'random-react-ui-components/dist/index.css';
import styles from './App.module.css';

const App = () => {
  const commonStyle = {
    width: 300,
    height: 300,
    margin: '15px auto',
    padding: '25px 10px',
    textAlign: 'center'
  };

  const commonInnerStyle = {
    width: 260,
    height: 260,
    margin: '15px auto',
    padding: 'auto'
  };

  const commonButtonStyle = {
    width: '150px',
    height: '50px',
    margin: '15px auto',
    padding: 'auto'
  };

  return (
    <div>
      <ExampleComponent text='Create React Library Example 😄' />
      <OutlineBox style={{ margin: '5vh 5vw', padding: '5vh 2.5vw' }}>
        <h1>Buttons</h1>
        <div className='row' style={{ height: 'auto' }}>
          <h2>Material Buttons</h2>
          <MaterialCard
            style={{
              ...commonStyle,
              width: '98%',
              height: 'auto'
            }}
          >
            <h3>Default or Primary</h3>
            <OutlineBox
              style={{
                width: '98%',
                display: 'flex',
                justifyContent: 'space-evenly',
                margin: '0 1%'
              }}
            >
              <MaterialButton style={commonButtonStyle}>
                Click Here !
              </MaterialButton>
              <MaterialButton type='outline' style={commonButtonStyle}>
                Click Here !
              </MaterialButton>
              <MaterialButton type='none' style={commonButtonStyle}>
                Click Here !
              </MaterialButton>
            </OutlineBox>

            <h3>Dark</h3>
            <OutlineBox
              style={{
                width: '98%',
                display: 'flex',
                justifyContent: 'space-evenly',
                margin: '0 1%'
              }}
            >
              <MaterialButton type='dark' style={commonButtonStyle}>
                Click Here !
              </MaterialButton>
              <MaterialButton type='dark outline' style={commonButtonStyle}>
                Click Here !
              </MaterialButton>
              <MaterialButton type='dark none' style={commonButtonStyle}>
                Click Here !
              </MaterialButton>
            </OutlineBox>

            <h3>Success</h3>
            <OutlineBox
              style={{
                width: '98%',
                display: 'flex',
                justifyContent: 'space-evenly',
                margin: '0 1%'
              }}
            >
              <MaterialButton type='success' style={commonButtonStyle}>
                Click Here !
              </MaterialButton>
              <MaterialButton type='success outline' style={commonButtonStyle}>
                Click Here !
              </MaterialButton>
              <MaterialButton type='success none' style={commonButtonStyle}>
                Click Here !
              </MaterialButton>
            </OutlineBox>

            <h3>Warning</h3>
            <OutlineBox
              style={{
                width: '98%',
                display: 'flex',
                justifyContent: 'space-evenly',
                margin: '0 1%'
              }}
            >
              <MaterialButton type='warning' style={commonButtonStyle}>
                Click Here !
              </MaterialButton>
              <MaterialButton type='warning outline' style={commonButtonStyle}>
                Click Here !
              </MaterialButton>
              <MaterialButton type='warning none' style={commonButtonStyle}>
                Click Here !
              </MaterialButton>
            </OutlineBox>

            <h3>Danger</h3>
            <OutlineBox
              style={{
                width: '98%',
                display: 'flex',
                justifyContent: 'space-evenly',
                margin: '0 1%'
              }}
            >
              <MaterialButton type='danger' style={commonButtonStyle}>
                Click Here !
              </MaterialButton>
              <MaterialButton type='danger outline' style={commonButtonStyle}>
                Click Here !
              </MaterialButton>
              <MaterialButton type='danger none' style={commonButtonStyle}>
                Click Here !
              </MaterialButton>
            </OutlineBox>
          </MaterialCard>
        </div>
      </OutlineBox>
      <OutlineBox
        style={{ margin: '5vh 5vw', padding: '5vh 2.5vw', overflow: 'hidden' }}
      >
        <h1>Material Cards</h1>
        <div className='row'>
          <MaterialCard
            style={commonStyle}
            className={styles.VerticalFlexbox}
            animate='shadow'
          >
            This is Default Card with a button <br />
            <MaterialButton
              type='danger none'
              style={{ width: '150px', height: '50px' }}
            >
              Click Me !!!
            </MaterialButton>
          </MaterialCard>
          <MaterialCard
            type='dark'
            style={commonStyle}
            className={styles.VerticalFlexbox}
          >
            This is Dark Card
          </MaterialCard>
          <MaterialCard
            type='xdark'
            style={commonStyle}
            className={styles.VerticalFlexbox}
          >
            This is Extra Dark Card
          </MaterialCard>
        </div>
      </OutlineBox>
      <OutlineBox
        style={{ margin: '5vh 5vw', padding: '5vh 2.5vw', overflow: 'hidden' }}
      >
        <h1>Neumorphic Cards</h1>
        <h3>Offest Cards</h3>
        <div className='row'>
          <div
            style={{
              ...commonStyle,
              backgroundColor: '#E0E5EC',
              padding: '20px'
            }}
          >
            <NeumorphicCard
              style={commonInnerStyle}
              className={styles.VerticalFlexbox}
            >
              This is Neumorphic Card
            </NeumorphicCard>
          </div>
          <div
            style={{
              ...commonStyle,
              backgroundColor: '#255763',
              padding: '20px'
            }}
          >
            <NeumorphicCard
              type='dark'
              style={commonInnerStyle}
              className={styles.VerticalFlexbox}
            >
              This is Neumorphic Dark Card
            </NeumorphicCard>
          </div>
          <div
            style={{
              ...commonStyle,
              backgroundColor: '#0a0a0a',
              padding: '20px'
            }}
          >
            <NeumorphicCard
              type='xdark'
              style={commonInnerStyle}
              className={styles.VerticalFlexbox}
            >
              This is Neumorphic Extra Dark Card
            </NeumorphicCard>
          </div>
        </div>

        <h3>Inset Cards</h3>
        <div className='row'>
          <div
            style={{
              ...commonStyle,
              backgroundColor: '#E0E5EC',
              padding: '20px'
            }}
          >
            <NeumorphicCard
              type='inset'
              style={commonInnerStyle}
              className={styles.VerticalFlexbox}
            >
              This is Neumorphic Card
            </NeumorphicCard>
          </div>
          <div
            style={{
              ...commonStyle,
              backgroundColor: '#255763',
              padding: '20px'
            }}
          >
            <NeumorphicCard
              type='inset-dark'
              style={commonInnerStyle}
              className={styles.VerticalFlexbox}
            >
              This is Neumorphic Dark Card
            </NeumorphicCard>
          </div>
          <div
            style={{
              ...commonStyle,
              backgroundColor: '#0a0a0a',
              padding: '20px'
            }}
          >
            <NeumorphicCard
              type='inset-xdark'
              style={commonInnerStyle}
              className={styles.VerticalFlexbox}
            >
              This is Neumorphic Extra Dark Card
            </NeumorphicCard>
          </div>
        </div>
      </OutlineBox>
    </div>
  );
};

export default App;
