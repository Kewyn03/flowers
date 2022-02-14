import React from 'react';
import GlobalStyles from './global'

import Header from "./components/main/header";
import News from "./components/main/news";


function App() {
    return (
        <>
            <Header/>
            <News/>
            <GlobalStyles/>
        </>


    );
}

export default App;
