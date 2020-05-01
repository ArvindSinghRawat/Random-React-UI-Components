import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Card, possibleType } from '../Card';

configure({ adapter: new Adapter() });

describe('<Card /> : ', () => {
  let wrapper = null;
  const content = 'This is a Card.';
  beforeEach(() => {
    wrapper = shallow(<Card>{content}</Card>);
  });

  // Testing for type props

  it('Should correctly render <Card /> for each type', () => {
    expect(wrapper.text()).toMatch(content);
    expect(wrapper).toMatchSnapshot();
  });

  for (const type of possibleType) {
    it(`Should correctly render <Card type="${type}" /> for each type`, () => {
      wrapper.setProps({ type: type });
      expect(wrapper.text()).toMatch(content);
      expect(wrapper).toMatchSnapshot();
    });
  }

  it('Should correctly render <Card/> with console.log() error of Unknown type', () => {
    console.log = jest.fn();
    console.error = jest.fn();
    const type = 'unknown';
    wrapper.setProps({ type: type });
    expect(console.log).toHaveBeenCalledWith(type + ' type not found');
    expect(console.error).toHaveBeenCalled();
  });

  it('Should correctly render <Card className="customClass" />', () => {
    wrapper.setProps({ className: 'customClass' });
    expect(wrapper.text()).toMatch(content);
    expect(wrapper).toMatchSnapshot();
  });
});
