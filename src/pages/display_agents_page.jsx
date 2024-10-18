import React from 'react';
import Sidebar from '../components/sidebar.js';
import Header from '../components/header.js';
import DataDisplay from '../components/display_agents.js';
import './home.css'

const DisplayAgents = () => {
    return (
        <div className="container">
            <div className="sidebar-container">
                <Sidebar />
            </div>
            <div className="content-container">
                <Header />
                <DataDisplay />
            </div>
        </div>
    );
}

export default DisplayAgents;
