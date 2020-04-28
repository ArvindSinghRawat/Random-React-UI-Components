import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Card } from '../Card';

configure({ adapter: new Adapter() });

describe('<Card /> : ', () => {
  let wrapper = null;
  const content = 'This is a Card.';
  beforeEach(() => {
    wrapper = shallow(<Card>{content}</Card>);
  });

  it('Should correctly render <Card />', () => {
    expect(wrapper.text()).toMatch(content);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should correctly render <Card class="dark"/>', () => {
    wrapper.setProps({ type: 'dark' });
    expect(wrapper).toMatchSnapshot();
  });

  it('Should correctly render <Card class="xdark"/>', () => {
    wrapper.setProps({ type: 'xdark' });
    expect(wrapper).toMatchSnapshot();
  });

  it('Should correctly render <Card/> with shadow animation', () => {
    wrapper.setProps({ animate: 'shadow' });
    expect(wrapper).toMatchSnapshot();
  });

  it('Should correctly render <Card/> with console.log() error of Unknown type', () => {
    console.log = jest.fn();
    console.error = jest.fn();
    const type = 'unknown';
    wrapper.setProps({ type: type });
    expect(console.log).toHaveBeenCalledWith(type + ' type not found');
    expect(console.error).toHaveBeenCalled();
  });

  it('Should correctly render <Card/> with console.log() error of Unknown animation', () => {
    console.log = jest.fn();
    console.error = jest.fn();
    const type = 'unknown';
    wrapper.setProps({ animate: type });
    expect(console.log).toHaveBeenCalledWith(type + ' animation not found');
    expect(console.error).toHaveBeenCalled();
  });

  it('Should correctly render <Card className="customClass" />', () => {
    wrapper.setProps({ className: 'customClass' });
    expect(wrapper.text()).toMatch(content);
    expect(wrapper).toMatchSnapshot();
  });
});
