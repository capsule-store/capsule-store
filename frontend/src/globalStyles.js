import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
/* Generated by boilerplate */
  body{
    font-family: titling-gothic-fb, sans-serif;
    grid-template-columns: 40px, auto, 40px, auto, 40px, auto, 40px;
    max-width: 100%;
    overflow-x: hidden;
  };

  body, div, nav, img, ul, li, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  };

  ul{
    list-style-type: none;
    list-style: none;
  };

  li{
    height: 2rem;
  };

  img{
    display: cover;
  };

  h1{
    font-size: 5rem;
  };

  h2{
    font-size: 1.5rem;
    font-weight: 600;
  };

  h3{
    font-size: 1.5rem;
  }

  h4{
    font-size: 1.2rem;
  };

  h5{
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 3px;
  };

  h6{
    font-size: 10px;
    line-height: 1.5rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 3px;
  };

  hr{
    color: #000;
    flex-grow: 2;
  }

  a{
    min-width: 1.5rem;
    min-height: 1.5rem;
    display: inline;
    color: #000;
  };

  a:visited {
    color: #000;
  };

  a:link {
    color: #000;
  }

`;
