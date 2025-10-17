import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;