import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    console.log();
    return (
        <>
            <HeaderNav />

            <div className="layout">
                <SideNav />
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </>

    );
};

export default Layout;
