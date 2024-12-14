import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    
    padding: 0;
    
    box-sizing: border-box;
  }
  
  body {
    background: ${({ theme }) => theme.colors.background.dark};

    font-family: 'Fira Code', monospace;
    color: ${({ theme }) => theme.colors.text.light};

    padding: 69px;
    
    @media (max-width: 769px) {
      padding: 15px;
    }
  }
`;
