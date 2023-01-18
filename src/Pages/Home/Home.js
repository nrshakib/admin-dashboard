import React from 'react';
import Chart from '../../Components/Chart/Chart';
import Featured from '../../Components/Featured/Featured';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Widget from '../../Components/Widget/Widget';
import './Home.scss';
import ListTable from '../../Components/ListTable/ListTable';

const Home = () => {
    return (
        <div className='home'>
            <Sidebar></Sidebar>
            <div className="home-container">
                <Navbar></Navbar>
                <div className="widgets">
                    <Widget type='user'></Widget>
                    <Widget type='order'></Widget>
                    <Widget type='earnings'></Widget>
                    <Widget type='balance'></Widget>
                </div>
                <div className="charts">
                    <Featured />
                    <Chart title="Last 6 Months(Revenue)" aspect={3 / 1} />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <ListTable></ListTable>
                </div>
            </div>
        </div>
    );
};

export default Home;