import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";
import { Router } from "./Router/Router";
import { BrowserRouter } from 'react-router-dom'
import { GithubContextProvider } from "./contexts/GithubContext";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>

      <BrowserRouter>
        <GithubContextProvider>
          <Router/>
        </GithubContextProvider>
       
      </BrowserRouter>

      <GlobalStyle></GlobalStyle>
    </ThemeProvider>
      
  )
}

export default App
