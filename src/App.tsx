import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/theme.ts";
import { GlobalStyle } from "./Styles/global.ts";
import { Router } from "./Routes/Router.tsx";
import { BrowserRouter } from "react-router-dom";
import { ApplicationStorage } from "./Context/ApplicationContext.tsx";

function App() {
  return (
    <BrowserRouter>
      <ApplicationStorage>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </ApplicationStorage>
    </BrowserRouter>
  );
}

export default App;
