import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {ThemeProvider} from "styled-components";
import store from './store/store'
import {BrowserRouter} from "react-router-dom";


const theme = {
    media: {
        phone: "(max-width: 425px)",
        tablet: "(max-width: 768px) and (min-width: 425px)",
        largeDesktops: "(max-width: 1400px) and (min-width: 768px)"
    }
}

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <App/>
            </Provider>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
);