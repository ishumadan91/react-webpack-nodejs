import React from 'react';
import { hot } from 'react-hot-loader';
import Button from './components/button';
import './app.scss';

const App = () => (
  <div className="app">
    React Starter
    <Button />
    <div className="sassyDiv">Get Sassy!</div>
  </div>
);

export default hot(module)(App);
