import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  React.render(<App />, document.getElementById('root'))
});
