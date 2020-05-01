import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Button, possibleColor, possibleTypes } from '../Button';

configure({ adapter: new Adapter() });

describe('<Button /> : ', () => {
  let wrapper = null;
  const content = 'Click Me !';
  beforeEach(() => {
    wrapper = shallow(<Button>{content}</Button>);
  });

  it('Should correctly render <Button />', () => {
    expect(wrapper.text()).toMatch(content);
    expect(wrapper).toMatchSnapshot();
  });

  for (const color of possibleColor) {
    it(`Should correctly render <Button type="${color}"/> for each type`, () => {
      wrapper.setProps({ type: color });
      expect(wrapper).toMatchSnapshot();
    });

    for (const type of possibleTypes) {
      it(`Should correctly render <Button type="${color} ${type}"/> for each color-type combination`, () => {
        wrapper.setProps({ type: `${color} ${type}` });
        expect(wrapper).toMatchSnapshot();
      });
    }
  }

  for (const type of possibleTypes) {
    it(`Should correctly render <Button type"${type}"/> for each type`, () => {
      wrapper.setProps({ type: `${type}` });
      expect(wrapper).toMatchSnapshot();
    });
  }

  it('Should correctly render <Button type="outline none"/> with console.error for mulitple types', () => {
    console.log = jest.fn();
    wrapper.setProps({ type: 'outline none' });
    expect(wrapper.text()).toMatch(content);
    expect(console.log).toHaveBeenCalled();
  });

  it('Should correctly render <Button type="dark success"/> with console.error for mulitple colors', () => {
    console.log = jest.fn();
    wrapper.setProps({ type: 'dark success' });
    expect(wrapper.text()).toMatch(content);
    expect(console.log).toHaveBeenCalled();
  });

  it('Should correctly render <Button /> even when unknown type is given with log', () => {
    console.log = jest.fn();
    wrapper.setProps({ type: 'xsaldnf' });
    expect(wrapper.text()).toMatch(content);
    expect(console.log).toHaveBeenCalled();
  });

  it('Should correctly render <Button className="customClass" />', () => {
    wrapper.setProps({ className: 'customClass' });
    expect(wrapper.text()).toMatch(content);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should correctly render <Button onClick="custommethod" />', () => {
    const customMethod = jest.fn();
    wrapper.find('button').simulate('click');
    expect(customMethod).not.toHaveBeenCalled();
    wrapper.setProps({ onClick: customMethod });
    expect(wrapper.text()).toMatch(content);
    expect(wrapper).toMatchSnapshot();
    expect(customMethod).not.toHaveBeenCalled();
    wrapper.find('button').simulate('click');
    expect(customMethod).toHaveBeenCalled();
  });

  it('Should return error for incorrect prop type />', () => {
    console.error = jest.fn();
    wrapper.setProps({ onClick: 'asdfs' });
    expect(console.error).toHaveBeenCalled();
  });
});
