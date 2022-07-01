import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

interface ContentProps {


}

export const Content = styled.div<ContentProps>`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background-image: url(https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
`;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: #FFF;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    border: 0;
    outline: 0;
  }

  input {
    outline: 0;
    border: 0;
  }

  a {
    text-decoration: none;
  }

  /* ::-webkit-scrollbar{
    width: 13px;
    height: 13px;
  }

  ::-webkit-scrollbar-thumb{
    background: rgba(255, 255, 255, 0.25);
  }

  ::-webkit-scrollbar-thumb:hover{
    background: rgba(255, 255, 255, 0.30);
  }

  ::-webkit-scrollbar-track{
    background: transparent;
    box-shadow: inset 0px 0px 0px 0px #F0F0F0;
  } */

  //// Media Queries
  html{
    @media(max-width: 1680px){
      font-size: 57.5%;
    }
  }
`;