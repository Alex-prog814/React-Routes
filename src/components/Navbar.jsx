import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        {/* <a href="/">Home</a>
        <a href="/about">About Us</a> */}

        {/* <Link to="/">Home</Link>
        <Link to="/about">About Us</Link> */}

        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
    </>
  )
}

export default Navbar