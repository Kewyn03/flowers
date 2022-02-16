import React from 'react';
import GlobalStyles from './global'

import Header from "./components/main/header";
import News from "./components/main/news";
import Stock from "./components/main/stock";


function App() {
    return (
        <>
            <Header/>
            <News/>
            <Stock/>
            <GlobalStyles/>
        </>


    );
}

export default App;
