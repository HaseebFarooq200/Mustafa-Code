import React from 'react';
import './agent.css';
import { useNavigate } from 'react-router-dom';

const Agent = () => {
    const navigate = useNavigate()
    return (
        <div className="agents-section">
            <div className="create-agent">
                <h2>Agents</h2>
                <p>Create your own customized agent</p>
                <button className="create-agent-btn" onClick={() => { navigate('/create-agent') }}>Create your own Agent</button>
            </div>
            <div className="built-in-agents">
                <h2>Built-in Agents</h2>
                <p>Helps to Build with you</p>
                <div className="agent-options">
                    <div className="agent-box">
                        <h3>Renovate your Construction</h3>
                        <p>5 different agents you can call with and chat also</p>
                    </div>
                    <div className="agent-box">
                        <h3>Build From Scratch</h3>
                        <p>4 different agents you can call with and chat also</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Agent;
