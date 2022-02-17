import React from 'react';
import GlobalStyles from './global'

import Header from "./components/main/header";
import News from "./components/main/news";
import Stock from "./components/main/stock";
import Forum from "./components/main/forum";
import Footer from "./components/main/footer";


function App() {
    return (
        <>
            <Header/>
            <News/>
            <Stock/>
            <Forum/>
            <Footer/>
            <GlobalStyles/>
        </>


    );
}

export default App;
