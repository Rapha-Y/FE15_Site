import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Body />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
