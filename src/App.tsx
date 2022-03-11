import React from 'react';
import GlobalStyles from './global'
import {Route, Routes,} from "react-router-dom";
import FirstPage from "./components/main/FirstPage";
import NotFound from "./components/NotFound";
import OrdersPage from "./components/OrdersPage";
import ItemPage from "./components/ItemPage";
import MainPage from "./components/main/MainPage";
import Cart from "./components/Cart";
import ItemsCatalog from "./components/ItemsCatalog";


export const App = () => {



    return (
        <>
            <GlobalStyles/>
            <Routes>

                <Route path="/" element={<FirstPage/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path="flowers">
                        <Route path=":id" element={<ItemPage/>}/>
                    </Route>
                    <Route path="cart" element={<Cart/>}/>
                    <Route path="orders" element={<OrdersPage/>}/>
                    <Route path="catalog" element={<ItemsCatalog/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>

            </Routes>
        </>


    );
}

export default App;
