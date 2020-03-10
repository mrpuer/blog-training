import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import Routes from './components/Routes';

function App() {
  return (
    <Router>
      <AppHeader />
      <Routes />
      <AppFooter />
    </Router>
  );
}

export default App;
