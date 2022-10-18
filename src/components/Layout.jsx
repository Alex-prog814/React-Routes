import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <footer>@All rights reserved!</footer>
    </>
  )
}

export default Layout