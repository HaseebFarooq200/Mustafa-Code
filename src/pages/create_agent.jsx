import React from 'react';
import Sidebar from '../components/sidebar.js';
import Header from '../components/header.js';
import CreateNewAgent from '../components/form.js'
import './home.css'

const CreateAgent = () => {
    return (
        <div className="container">
            <div className="sidebar-container">
                <Sidebar />
            </div>
            <div className="content-container">
                <Header />
                <CreateNewAgent />
            </div>
        </div>
    );
}

export default CreateAgent;
