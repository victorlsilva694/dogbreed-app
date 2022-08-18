import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Raleway';
    background-color: black;
    background-color: rgb(255,255,255);
    margin: 0;
  }

  h1 {
    font-size: 1rem;
  }
  p{
    font-size: 1rem;
    font-family: 'Raleway';
    margin-top: 10px;
  }
`;

export default GlobalStyles;