import React, { Fragment } from "react";
import GlobalStyles from "styles/Global";
import CepFinder from "containers/CepFinder";
import { ThemeProvider } from "styled-components";
import Wrapper from "./App.styles";
import theme from "styles/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles />
        <Wrapper>
          <CepFinder />
        </Wrapper>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
