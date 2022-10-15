import React from 'react';
import './Widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { AccountBalanceWalletOutlined, Difference, MonetizationOnOutlined, ShoppingCartOutlined } from '@mui/icons-material';


const Widget = ({ type }) => {
    let data;

    //temporary
    const amount = 100;
    const difference = 20;
    switch (type) {
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See All Users',
                icon: <PersonOutlineOutlinedIcon className='icon' style={{
                    color: 'red',
                    backgroundColor: 'rgba(255,0,0,0.2)'
                }}
                />
            };
            break;
        case 'order':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: 'View All Orders',
                icon: <ShoppingCartOutlined className='icon' style={{
                    color: 'goldenrod',
                    backgroundColor: 'rgba(218,165,32,0.2)'
                }}
                />
            };
            break;
        case 'earnings':
            data = {
                title: 'EARNINGS',
                isMoney: true,
                link: 'View Net Earnings',
                icon: <MonetizationOnOutlined className='icon' style={{
                    color: 'green',
                    backgroundColor: 'rgba(0,128,0,0.2)'
                }} />
            };
            break;
        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'View Details',
                icon: <AccountBalanceWalletOutlined className='icon' style={{
                    color: 'purple',
                    backgroundColor: 'rgba(128,0,128,0.2)'
                }} />
            };
            break;
        default:
            break;
    }

    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && '$'}{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive ">
                    <KeyboardArrowUpIcon />
                    {difference}%
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;