import React from 'react';
import Routes from './routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
