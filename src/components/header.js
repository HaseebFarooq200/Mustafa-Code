import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="profile-section">
                <img
                    src="https://via.placeholder.com/50"
                    alt="Admin"
                    className="profile-image"
                />
                <span>Admin</span>
            </div>
            <button className="logout-btn">Logout</button>
        </div>
    );
}

export default Header;
