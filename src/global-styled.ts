import { createGlobalStyle } from "styled-components";

const  GlobalStyle = createGlobalStyle`

  *{
    margin: 10;
    padding: 4;
    box-sizing: border-box;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background-color: #bdbdc095;
    overflow-x: hidden;
  }

  
  #root{
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  `

  export default GlobalStyle
  
