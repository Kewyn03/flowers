import React from 'react';
import GlobalStyles from './global'
import {Route, Routes,} from "react-router-dom";
import FirstPage from "./components/main/FirstPage";
import NotFound from "./components/NotFound";
import OrdersPage from "./components/OrdersPage";
import ItemPage from "./components/ItemPage";
import MainPage from "./components/main/MainPage";
import Cart from "./components/Cart";
import PaginatedCatalog from "./components/main/PaginatedCatalog";


export const App = () => {


    return (
        <>
            <GlobalStyles/>
            <Routes>

                <Route path="/" element={<FirstPage/>}>
                    <Route index element={<MainPage/>}/>

                    <Route path="cart" element={<Cart/>}/>
                    <Route path="orders" element={<OrdersPage/>}/>
                    <Route path="catalog" >
                        <Route index element={<PaginatedCatalog/>}/>
                        <Route path="flowers/:id" element={<ItemPage/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Route>

            </Routes>
        </>


    );
}

export default App;
