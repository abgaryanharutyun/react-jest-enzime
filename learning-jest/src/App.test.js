import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });
test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test('test increment button', ()=> {
  const wrapper = shallow(<App />);
  const button = wrapper.find("[data-test='increment-button']");
  expect(button.length).toBe(1);
});

test('render count display', ()=> {
  const wrapper = shallow(<App />);
  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.length).toBe(1);
});

test('count started at 0', () => {

});

test('click button increment count display', () => {

})