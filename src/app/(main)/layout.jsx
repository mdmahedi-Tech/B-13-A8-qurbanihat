import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TipAndTop from '@/components/TipAndTop';
import React from 'react';

const Mainlayout = ({children}) => {
    return (
        <div>
            <main>
                <Navbar></Navbar>
                <Banner></Banner>
                {children}
                <TipAndTop></TipAndTop>
                <Footer></Footer>
            </main>
        </div>
    );
};

export default Mainlayout;