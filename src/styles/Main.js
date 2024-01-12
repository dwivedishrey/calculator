import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const colors = {
  black: "black",
  gray: "gray",
  blue:"#2c3e50",
  skyBlue: "skyBlue",
  red:"#e74c3c",
  darkb:"#3498db",
  green:"#2ecc71",
  orange:"#e67e22",
  primaryBackground: "#2c3e50",
};

export const GlobalStyle = createGlobalStyle `
  body, html {
    margin: 0;
    padding: 0;
    background: linear-gradient(to bottom right, #3498db, #ecf0f1);
  }
`;
export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 100%;
  max-width: 400px; 
  margin: 40px auto;
  grid-template-columns: repeat(4, 1fr); 
  grid-template-rows: minmax(100px, auto) repeat(5, 1fr);
  box-shadow: 2px 2px 10px #333;
  border-radius: 10px;
  background-color: ${colors.primaryBackground};
  background: linear-gradient(to right, #2c3e50, #3498db);

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: minmax(120px, auto) repeat(5, 100px);
  }
`;

export const Screen = styled.div`
  grid-column: 1 / -1;
  background: linear-gradient(to right, #3498db, #1abc9c); 
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
 
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Previous = styled.div`
  color: ${colors.black};
  font-size: 1.5rem;
  
`;

export const Current = styled.div`
  color: ${colors.black};
  font-size: 2.5rem;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 2rem;
  outline: none;
  color:white;
  border-radius:50px;
  margin:5px;
  box-size:10px;
  box-shadow: 5px 5px 5px skyblue;
  border: 1px outset ${colors.black};
  background-color: ${colors.blue};
  &:hover {
    background-color: gray;
  }
  ${function ({ gridSpan }) {
    if (gridSpan) {
      return `grid-column: span ${gridSpan};`;
    }
  }};
  ${({ operation }) => operation && `background-color: ${colors.red};`};
  ${({ control }) => control && `background-color: ${colors.darkb};`};
  ${({ equals }) =>
    equals && `background-color: ${colors.green};`};
  ${({ decimal }) =>
    decimal && `background-color: ${colors.orange}; `};

  @media (min-width: 768px) {
    
    font-size: 2.5rem;
  }
`;
