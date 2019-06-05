import ReactDOM from 'react-dom';
import React from 'react'
import App from './App';


it('renders without crashing', () => {
  ReactDOM.render(<App />, document.getElementById('test'))
});
