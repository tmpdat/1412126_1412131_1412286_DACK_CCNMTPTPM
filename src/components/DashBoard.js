import React from 'react';
import UserWallet from '../containers/UserWallet';
import RecentTransactions from '../containers/RecentTransactions';
import AllTransactions from '../containers/AllTransactions';

const Dashboard = (props) => {
    return(
        <div className='dash-board row'>
            <div className={'col-sm-6 col-md-6 col-lg-6'}>
                <UserWallet/>
                <div>
                    <RecentTransactions/>
                </div>
            </div>
            <div className={'col-sm-6 col-md-6 col-lg-6'}>
                <AllTransactions/>
            </div>
        </div>
    );
};

export default Dashboard;