import React from 'react';
import Sidebar from '../Components/Sidebar';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='basis-[15%] h-[100vh] border'>
                <Sidebar />
            </div>
            <div className='basis-[85%] border'>Dashboard</div>
        </div>
    );
};

export default Dashboard;
