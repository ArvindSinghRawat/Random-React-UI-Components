import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { OutlineBox } from '../OutlineBox';

configure({ adapter: new Adapter() });

describe('<OutlineBox />', () => {
  let wrapper = null;
  const content = 'This is Outline Box.';
  beforeEach(() => {
    wrapper = shallow(<OutlineBox>{content}</OutlineBox>);
  });

  it('Should render <OutlineBox />', () => {
    expect(wrapper.text()).toMatch(content);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render <OutlineBox className="customClass"/>', () => {
    wrapper.setProps({ className: 'customClass' });
    expect(wrapper.text()).toMatch(content);
    expect(wrapper).toMatchSnapshot();
  });
});
