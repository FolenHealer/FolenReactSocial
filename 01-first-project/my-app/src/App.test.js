import React from 'react';
import { render } from '@testing-library/react';
import FolenApp from "./AppContainer";
import ReactDOM from 'react-dom'

test('renders learn react link', () => {
  const { getByText } = render(<FolenApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('render without crashing', () =>{
  const div = document.createElement('div');
  ReactDOM.render(<FolenApp/>, div);
  ReactDOM.unmountComponentAtNode(div);
    })