import React from 'react';

export const buttonWrapper = (
  WrappedButton,
  defaultClasses,
  colorCss,
  typesCss
) => {
  class ButtonWrapper extends React.Component {
    render() {
      const cssClasses = [...defaultClasses];

      const type = [];
      const color = [];

      let possibleTypes = [];
      try {
        possibleTypes = Object.keys(typesCss);
      } catch (err) {
        console.log(
          'Please pass dictionary of (string: string) elements ',
          err
        );
      }
      let possibleColors = [];
      try {
        possibleColors = Object.keys(colorCss);
      } catch (err) {
        console.log(
          'Please pass dictionary of (string: string) elements ',
          err
        );
      }

      const receivedType = this.props.type
        ? this.props.type.split(/[ ,-]+/)
        : [];
      for (const element of receivedType) {
        let temp = possibleTypes.indexOf(element);
        if (temp !== -1) {
          color.push(typesCss[element]);
        } else {
          temp = possibleColors.indexOf(element);
          if (temp !== -1) {
            type.push(colorCss[element]);
          } else {
            console.log(`${element} not known as type or color`);
          }
        }
      }

      console.log(receivedType);

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
        cssClasses.join(' ') +
        (this.props.className ? ' ' + this.props.className : '')
      ).trimRight();

      return <WrappedButton finalClass={finalClass} {...this.props} />;
    }
  }
  ButtonWrapper.displayName = `ButtonWrapper(${getDisplayName(WrappedButton)})`;
  return ButtonWrapper;
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Button';
}
