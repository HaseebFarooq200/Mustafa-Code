import React from 'react';
import Sidebar from '../components/sidebar.js';
import Header from '../components/header.js';
import Agent from '../components/agent.js';
import './home.css'

const Home = () => {
    return (
        <div className="container">
            <div className="sidebar-container">
                <Sidebar />
            </div>
            <div className="content-container">
                <Header />
                <Agent />
            </div>
        </div>
    );
}

export default Home;
