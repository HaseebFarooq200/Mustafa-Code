import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './display_agents.css';

const DataDisplay = () => {
    const [data, setData] = useState([]);

    // Fetch data from the backend API
    useEffect(() => {
        axios.get('https://example.com/api/data') // Replace with your backend API URL
            .then(response => {
                setData(response.data); // Assuming the response has data array
            })
            .catch(error => {
                console.error('Error fetching data', error);
            });
    }, []);

    return (
        // <div className="data-display-container">
        //     {data.length = 0 ? (
        //         <div className="card-container">
        //             {data.map((item, index) => (
        //                 <div className="card" key={index}>
        //                     <h3>Haseeb</h3>
        //                     <p>Age: 23</p>
        //                     <p>Place: Islamabad</p>
        //                     <p>Occupation: IT Engineer</p>
        //                     <p>Hobbies: Sports</p>
        //                 </div>
        //             ))}
        //         </div>
        //     ) : (
        //         <p>Nothing to display</p>
        //     )}
        // </div>

        <div className="data-display-container">
            <div className="card-container">
                <div className="card" >
                    <h3>Haseeb</h3>
                    <p>Age: 23</p>
                    <p>Place: Islamabad</p>
                    <p>Occupation: IT Engineer</p>
                    <p>Hobbies: Sports</p>
                </div>
                <div className="card" >
                    <h3>Haseeb</h3>
                    <p>Age: 23</p>
                    <p>Place: Islamabad</p>
                    <p>Occupation: IT Engineer</p>
                    <p>Hobbies: Sports</p>
                </div>
                <div className="card" >
                    <h3>Haseeb</h3>
                    <p>Age: 23</p>
                    <p>Place: Islamabad</p>
                    <p>Occupation: IT Engineer</p>
                    <p>Hobbies: Sports</p>
                </div>
            </div>
        </div>
    );
};

export default DataDisplay;
