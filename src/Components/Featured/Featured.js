import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import './Featured.scss';
import 'react-circular-progressbar/dist/styles.css';
import { KeyboardArrowDown } from '@mui/icons-material';
import { KeyboardArrowUpOutlined } from '@mui/icons-material';

const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertIcon fontSize='small' />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={65} text={'65%'} strokeWidth={3}></CircularProgressbar>
                </div>
                <p className="title">Total Sales Today</p>
                <p className="amount">$510</p>
                <p className="description">Transaction is processing. Please complete the payments.</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlined fontSize='small'></KeyboardArrowUpOutlined>
                            <div className="resultAmount">$15.3K</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">This Week</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDown fontSize='small'></KeyboardArrowDown>
                            <div className="resultAmount">$2.7K</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">This Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlined fontSize='small'></KeyboardArrowUpOutlined>
                            <div className="resultAmount">$10.1K</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Featured;