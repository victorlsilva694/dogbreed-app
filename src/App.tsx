import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Routes from './Routes';

function App() {
  return (
   <>
      <BrowserRouter>
        <GlobalStyles /> 
        <Routes />
      </BrowserRouter>
   </>
  );
}

export default App;
