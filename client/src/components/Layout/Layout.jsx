import React from 'react';
import {Outlet} from "react-router-dom";
// import Header from "../Header/Header";
// import Footer from '../Footer/Footer.jsx';

function Layout() {
    return (
        <>
            <header></header>
            <Outlet/>
            <footer></footer>
            </>
    );
}

export default Layout;