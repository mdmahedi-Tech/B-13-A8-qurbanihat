import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import TipAndTop from '@/components/TipAndTop';
import React from 'react';

const Mainlayout = ({children}) => {
    return (
        <div>
            <main>
                {/* <Header></Header> */}
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