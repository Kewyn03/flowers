import React, {FC} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";

const FirstPage: FC = () => {
    return (
     <>
         <Header/>
         <Outlet/>
         <Footer/>

     </>
    );
};

export default FirstPage;