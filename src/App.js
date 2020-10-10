import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PATH } from 'config/config';
import About from 'pages/about/about';
import Product from 'pages/product/product';
import Question from 'pages/question/question';
import Traffic from 'pages/traffic/traffic';
import Process from 'pages/process/process';
import Contact from 'pages/contact/contact';

const App = () => {
  return (
    <Router>
      <Route component={About} path="/" />
      <Route component={About} path={PATH.ABOUT} />
      <Route component={Product} path={PATH.PRODUCT} />
      <Route component={Process} path={PATH.PROCESS} />
      <Route component={Question} path={PATH.QUESTION} />
      <Route component={Traffic} path={PATH.TRAFFIC} />
      <Route component={Contact} path={PATH.CONTACT} />
    </Router>
  );
};

export default App;
