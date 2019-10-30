import styled from 'styled-components';

const Button = styled.button`
display:block;
justify-content: stretch;
text-align: center;
border: none;
background-color: #fff;
font-family:font-family: titling-gothic-fb, sans-serif;
line-height: 3rem;
text-transform: uppercase;
letter-spacing: 3px;
line-height: 48px;
font-weight: 600;
font-size: 16px;
transition: all 0.3s ease-in-out;
&:hover{
  background-color: #000;
  color: #fff;
}
$:disabled{
  opacity: 0.5;
}
`;

export default (Button);
