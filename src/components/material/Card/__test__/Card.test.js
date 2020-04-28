import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import styles from '../Card.module.css';

import { Card } from '../Card';

configure({ adapter: new Adapter() });

describe('<Card />', () => {
  let wrapper = null;
  const content = 'This is a Card.';
  beforeEach(() => {
    wrapper = shallow(<Card>{content}</Card>);
  });

  it('Should render <Card />', () => {
    expect(wrapper.text()).toMatch(content);
  });

  it('Should render <Card class="dark"/>', () => {
    wrapper.setProps({ type: 'dark' });
    expect(wrapper).toMatchSnapshot();
  });
});
