import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar'
const Header = () => {
    return (
        <>
            <Navbar />
            <div className="">
                <div className="container">
                    <div className="row">
                        <div>
                            <h2>Dashboard</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;