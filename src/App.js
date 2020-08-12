import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Body />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
