import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Body />
    </BrowserRouter>
  );
}

export default App;
