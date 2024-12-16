import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    
    padding: 0;
    
    box-sizing: border-box;
  }
  
  body {
    background-color: ${({ theme }) => theme.colors.background.darkest};
    

    font-family: 'Fira Code', monospace;
    color: ${({ theme }) => theme.colors.text.light};
    

    padding: 15px;
    
    #root {
      display: grid;
      
      background-color: ${({ theme }) => theme.colors.background.dark};

      border-radius: 8px;

      min-height: calc(100vh - 30px);
    }
  }
`;
