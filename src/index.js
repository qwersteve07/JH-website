import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'base/init.sass';
import 'base/tailwind.output.css';
import App from './App';
import smoothscroll from 'smoothscroll-polyfill';

const Root = () => {
  useEffect(() => {
    // smooth scrolling polyfill for safari
    smoothscroll.polyfill();
  });
  return <App />;
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
