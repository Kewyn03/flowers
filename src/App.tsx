import React from 'react';
import Main from "./components/main/main";
import GlobalStyles from './global'
import {ThemeProvider} from "styled-components";

const theme = {
    media: {
        phone : "(max-width: 425px)",
        tablet : "(max-width: 768px) and (min-width: 425px)",
        largeDesktops : "(max-width: 1400px) and (min-width: 768px)"
    }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
            <Main/>
        <GlobalStyles />
    </ThemeProvider>

  );
}

export default App;
