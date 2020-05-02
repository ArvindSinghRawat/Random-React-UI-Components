import React from 'react';

import {
  MaterialCard,
  NeumorphicCard,
  OutlineBox,
  MaterialButton,
  NeumorphicButton
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
      <OutlineBox
        style={{
          margin: '15px 5vw',
          padding: '25px 10px',
          textAlign: 'center'
        }}
      >
        <h1>
          Random React UI Components{' '}
          <span role='img' aria-label='HaHa'>
            😄
          </span>
        </h1>
      </OutlineBox>
      <OutlineBox style={{ margin: '5vh 5vw', padding: '5vh 2.5vw' }}>
        <h1>Buttons</h1>
        <div className='row' style={{ height: 'auto', textAlign: 'center' }}>
          {/* Material Buttons */}
          <h2 style={{ width: '100%', marginBottom: '50px' }}>
            Material Buttons
          </h2>
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

          {/* Neumorphic Buttons */}
          <h2 style={{ width: '100%', marginTop: '50px' }}>
            Neumorphic Buttons
          </h2>
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
              <NeumorphicButton style={commonButtonStyle}>
                Neumorphic Click Here !
              </NeumorphicButton>
              <NeumorphicButton type='inset' style={commonButtonStyle}>
                Click Here !
              </NeumorphicButton>
              <NeumorphicButton type='defaultIn' style={commonButtonStyle}>
                Click Here !
              </NeumorphicButton>
            </OutlineBox>
            <h3>Light</h3>
            <OutlineBox
              style={{
                backgroundColor: '#e0e5ec',
                width: '98%',
                display: 'flex',
                justifyContent: 'space-evenly',
                margin: '0 1%'
              }}
            >
              <NeumorphicButton type='light' style={commonButtonStyle}>
                Click Here !
              </NeumorphicButton>
              <NeumorphicButton type='light inset' style={commonButtonStyle}>
                Click Here !
              </NeumorphicButton>
              <NeumorphicButton
                type='light defaultIn'
                style={commonButtonStyle}
              >
                Click Here !
              </NeumorphicButton>
            </OutlineBox>
            <h3>Dark</h3>
            <MaterialCard
              type='dark'
              style={{
                width: '98%',
                display: 'flex',
                justifyContent: 'space-evenly',
                margin: '0 1%'
              }}
            >
              <NeumorphicButton type='dark' style={commonButtonStyle}>
                Click Here !
              </NeumorphicButton>
              <NeumorphicButton type='dark inset' style={commonButtonStyle}>
                Click Here !
              </NeumorphicButton>
              <NeumorphicButton type='dark defaultIn' style={commonButtonStyle}>
                Click Here !
              </NeumorphicButton>
            </MaterialCard>
            <h3>Extra Dark</h3>
            <MaterialCard
              type='xdark'
              style={{
                width: '98%',
                display: 'flex',
                justifyContent: 'space-evenly',
                margin: '0 1%'
              }}
            >
              <NeumorphicButton type='xdark' style={commonButtonStyle}>
                Click Here !
              </NeumorphicButton>
              <NeumorphicButton type='xdark inset' style={commonButtonStyle}>
                Click Here !
              </NeumorphicButton>
              <NeumorphicButton
                type='xdark defaultIn'
                style={commonButtonStyle}
              >
                Click Here !
              </NeumorphicButton>
            </MaterialCard>
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
