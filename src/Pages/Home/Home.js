import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Sidebar></Sidebar>
            <div className="home-container">
                <Navbar></Navbar>
                Home
            </div>
        </div>
    );
};

export default Home;