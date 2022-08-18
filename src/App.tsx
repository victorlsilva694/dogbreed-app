import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Routes from './Routes';

function App() {
  return (
   <>
      <BrowserRouter>
        {/* <VerifyToken />*/}
        <GlobalStyles /> 
        <Routes />
      </BrowserRouter>
   </>
  );
}

export default App;
