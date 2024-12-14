import './App.css'
import {ThemeProvider} from "styled-components";
import {theme} from "./Styles/theme.ts";
import {GlobalStyle} from "./Styles/global.ts";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
     <h1>Hello World</h1>
    </ThemeProvider>
  )
}

export default App
