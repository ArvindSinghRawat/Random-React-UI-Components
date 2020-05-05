import React from 'react';
import { configure, shallow } from 'enzyme';
import { Button } from '../../components/material/Button/Button';
import Adapter from 'enzyme-adapter-react-16';
import { buttonWrapper } from '../ButtonWrapper';

configure({ adapter: new Adapter() });

describe('For ButtonWrapper() HOC : ', () => {
  const content = 'This is Inner Component';
  beforeEach(() => {
    console.log = jest.fn();
  });

  it('Should render the string child component. With two error logs.', () => {
    const WrappedComponent = buttonWrapper(content);
    const wrapper = shallow(<WrappedComponent />);
    expect(console.log).toHaveBeenCalledTimes(2);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render the child component. With two error logs.', () => {
    const WrappedComponent = buttonWrapper(Button);
    const wrapper = shallow(<WrappedComponent>{content}</WrappedComponent>);
    expect(console.log).toHaveBeenCalledTimes(2);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render the child component with cssClass = 'customClass'. With two error logs.", () => {
    const WrappedComponent = buttonWrapper(Button, ['customClass']);
    const wrapper = shallow(<WrappedComponent>{content}</WrappedComponent>);
    expect(console.log).toHaveBeenCalledTimes(2);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render the child component with single error log for missing colorType argument.', () => {
    const WrappedComponent = buttonWrapper(Button, ['customClass'], ['1']);
    shallow(<WrappedComponent>{content}</WrappedComponent>);
    expect(console.log).toHaveBeenCalledTimes(1);
  });

  it('Should render the child component with single error log for missing colorCss argument.', () => {
    const WrappedComponent = buttonWrapper(Button, ['customClass'], null, [
      '1'
    ]);
    shallow(<WrappedComponent>{content}</WrappedComponent>);
    expect(console.log).toHaveBeenCalledTimes(1);
  });

  it('Should render the child component without any error log.', () => {
    const WrappedComponent = buttonWrapper(
      Button,
      ['customClass'],
      ['c1'],
      ['t2']
    );
    shallow(<WrappedComponent>{content}</WrappedComponent>);
    expect(console.log).toHaveBeenCalledTimes(0);
  });

  it("Should render the child component with cssClass = 'customClass customButton'", () => {
    const WrappedComponent = buttonWrapper(Button, ['customClass'], ['c1'], {
      t1: 'customButton'
    });
    const wrapper = shallow(
      <WrappedComponent type='t1'>{content}</WrappedComponent>
    );
    expect(console.log).toHaveBeenCalledTimes(0);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render the child component with cssClass = 'customClass customColor'", () => {
    const WrappedComponent = buttonWrapper(
      Button,
      ['customClass'],
      {
        c1: 'customColor'
      },
      {
        t1: 'customButton'
      }
    );
    const wrapper = shallow(
      <WrappedComponent type='c1'>{content}</WrappedComponent>
    );
    expect(console.log).toHaveBeenCalledTimes(0);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render the child component with cssClass = 'customClass customColor2' and with console error log for multipl color classes", () => {
    const WrappedComponent = buttonWrapper(
      Button,
      ['customClass'],
      {
        c1: 'customColor1',
        c2: 'customColor2'
      },
      {
        t1: 'customButton'
      }
    );
    const wrapper = shallow(
      <WrappedComponent type='c1 c2'>{content}</WrappedComponent>
    );
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render the child component with cssClass = 'customClass customButton2' and with console error log for multipl type classes", () => {
    const WrappedComponent = buttonWrapper(
      Button,
      ['customClass'],
      {
        c1: 'customColor'
      },
      {
        t1: 'customButton1',
        t2: 'customButton2'
      }
    );
    const wrapper = shallow(
      <WrappedComponent type='t1 t2'>{content}</WrappedComponent>
    );
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should correctly render child component even when unknown type is given with log', () => {
    const WrappedComponent = buttonWrapper(
      Button,
      ['customClass'],
      {
        c1: 'customColor'
      },
      {
        t1: 'customButton'
      }
    );
    const wrapper = shallow(<WrappedComponent>{content}</WrappedComponent>);
    console.log = jest.fn();
    wrapper.setProps({ type: 'xsaldnf' });
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(wrapper).toMatchSnapshot();
  });
});
