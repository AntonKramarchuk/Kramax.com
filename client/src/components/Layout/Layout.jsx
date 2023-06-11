import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer";
// import Header from "../Header/Header";


function Layout() {
    return (
        <>
            <header>Header</header>
            <main>
                <Outlet/>
            </main>
           <Footer/>
            </>
    );
}

export default Layout;