import React from "react";
import Router from "./Routes/Router";
import {ThemeProvider} from "@mui/material"
import theme from "./Constants/theme";
import { GlobalStyled } from "./GlobalStyled";
import GlobalState from "./Context/Global/globalState";


function App() {
  return (
    <ThemeProvider theme ={theme}>
      <GlobalStyled/>
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
