import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Componets/Navbar/Navbar';
import Footer from '../Componets/Footer/Footer';

const MainLayout = () => {
    return (
         <div
        className='mx-auto'
        >
          <Navbar></Navbar> 
          <Outlet></Outlet>
          <Footer></Footer> 
        </div>
    );
};

export default MainLayout;