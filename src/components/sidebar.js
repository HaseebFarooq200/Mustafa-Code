import React, { useState } from 'react';
import { Database, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './sidebar.css';

const Sidebar = ({ setCurrentPage }) => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false); // State to control sidebar visibility
    // const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsOpen(!isOpen); // Toggle sidebar state
    };
    return (
        // <div className="sidebar">
        //     <h2>Tools</h2>
        //     <ul>
        //         <li className="sidebar-item " onClick={() => { navigate('/') }}>
        //             <Database className="icon" />
        //             <span>Dashboard</span>
        //         </li>
        //         <li className="sidebar-item" onClick={() => { navigate('/get-agents') }}>
        //             <UserPlus className="icon" />
        //             <span>Agents</span>
        //         </li>

        //     </ul>
        // </div>
        <div>
            {/* Toggle Button for Mobile */}
            <button className="toggle-button" onClick={toggleSidebar}>
                ☰ {/* Hamburger Menu Icon */}
            </button>

            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <h2>Tools</h2>
                <ul>
                    <li className="sidebar-item" onClick={() => { navigate('/'); toggleSidebar(); }}>
                        <Database className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <li className="sidebar-item" onClick={() => { navigate('/get-agents'); toggleSidebar(); }}>
                        <UserPlus className="icon" />
                        <span>Agents</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
