import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button, { possibleTypes, possibleColor } from '../Button';

configure({ adapter: new Adapter() });

describe('For Neumorphic Button : ', () => {
  const content = 'This is a Neumorphic Button';
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallow(<Button>{content}</Button>);
  });

  it('Should correctly render <Button />', () => {
    const localWrapper = mount(<Button>{content}</Button>);
    expect(localWrapper.text()).toMatch(content);
    expect(localWrapper).toMatchSnapshot();
  });

  it(`Should correctly render Button with cssClass = "customClass"`, () => {
    wrapper.setProps({ className: 'customClass' });
    expect(wrapper).toMatchSnapshot();
  });

  it('Should correctly render <Button onClick="custommethod" />', () => {
    const localWrapper = mount(<Button>{content}</Button>);
    const customMethod = jest.fn();
    localWrapper.find('button').simulate('click');
    expect(customMethod).not.toHaveBeenCalled();
    localWrapper.setProps({ onClick: customMethod });
    expect(localWrapper.text()).toMatch(content);
    expect(localWrapper).toMatchSnapshot();
    expect(customMethod).not.toHaveBeenCalled();
    localWrapper.find('button').simulate('click');
    expect(customMethod).toHaveBeenCalled();
  });

  it('Should return error for incorrect prop type />', () => {
    console.error = jest.fn();
    wrapper.setProps({ onClick: 'asdfs' });
    expect(console.error).toHaveBeenCalled();
  });

  for (const color of possibleColor) {
    // Only Color Tests
    it(`Should correctly render Button with cssClass = "${color}"`, () => {
      wrapper.setProps({ type: color });
      expect(wrapper).toMatchSnapshot();
    });
    for (const type of possibleTypes) {
      // Combination of Types and Color
      it(`Should correctly render Button with cssClass = "${type} ${color}"`, () => {
        wrapper.setProps({ type: `${type} ${color}` });
        expect(wrapper).toMatchSnapshot();
      });
    }
  }
  for (const type of possibleTypes) {
    // Only Types Tests
    it(`Should correctly render Button with cssClass = "${type}"`, () => {
      wrapper.setProps({ type: type });
      expect(wrapper).toMatchSnapshot();
    });
  }
});
