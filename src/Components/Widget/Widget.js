import React from 'react';
import './Widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


const Widget = ({ type }) => {
    let data;
    return (
        <div className='widget'>
            <div className="left">
                <span className="title">Users</span>
                <span className="counter">1</span>
                <span className="link">See all users</span>
            </div>
            <div className="right">
                <div className="percentage positive ">
                    <KeyboardArrowUpIcon />
                    20%
                </div>
                <PersonOutlineOutlinedIcon className='icon' />
            </div>
        </div>
    );
};

export default Widget;