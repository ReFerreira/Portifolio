import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    height: 100vh;
    /* background: ${(props) => props.theme.color.background}; */
    background: #000000;
    font-family: 'Source Sans Pro', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    color: #FFF;
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
  }

  input, button {
    font: 14px sans-serif;
  }

  @media (max-width: 768px) {
    html {
      font-size: 50%;
      margin-right: 2rem;

      div.container {
        display: none;
      }
    }

   
  }
`;
