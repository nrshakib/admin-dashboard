import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Widget from '../../Components/Widget/Widget';
import './Home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Sidebar></Sidebar>
            <div className="home-container">
                <Navbar></Navbar>
                <div className="widgets">
                    <Widget></Widget>
                    <Widget></Widget>
                    <Widget></Widget>
                    <Widget></Widget>
                </div>
            </div>
        </div>
    );
};

export default Home;