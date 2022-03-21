import { render, screen } from '@testing-library/react';
import App from './App';
import {mount, shallow} from "enzyme";
import {TimerButton} from './timerButton'


describe("",()=>{
  let container
  beforeEach(() => (container = shallow(<App />)));
  it('should change isOn state true when the start button is clicked', () => {
    container.instance().forceUpdate();
    container.find('.start-timer').first().simulate('click');
    expect(container.instance().state.isOn).toEqual(true);
  });

  it('should change isOn state false when the stop button is clicked', () => {
    container.instance().forceUpdate();
    container.find('.stop-timer').first().simulate('click');
    expect(container.instance().state.isOn).toEqual(false);
  });

  it('should change isOn state false when the reset button is clicked', () => {
    container.instance().forceUpdate();
    container.find('.stop-timer').first().simulate('click');
    expect(container.instance().state.isOn).toEqual(false);
    expect(container.instance().state.minutes).toEqual(25);
    expect(container.instance().state.seconds).toEqual(0);
  });
})
