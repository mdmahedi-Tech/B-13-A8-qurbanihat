import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const Authlayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
             <ToastContainer />
        </div>
    );
};

export default Authlayout;