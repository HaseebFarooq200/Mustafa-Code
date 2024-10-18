import React, { useState } from 'react';
import axios from 'axios';
import './form.css'


const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        place: '',
        occupation: '',
        hobbies: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Use axios to send the form data to the API
            const response = await axios.post('https://api.example.com/submit', formData);
            console.log('API response:', response.data);
            alert('Form submitted successfully');
        } catch (error) {
            console.error('Error submitting the form:', error);
            alert('Failed to submit form');
        }
    };
    return (
        <div className="form-container">
            <h2>Submit Your Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Place:</label>
                    <input
                        type="text"
                        name="place"
                        value={formData.place}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Occupation:</label>
                    <input
                        type="text"
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Hobbies:</label>
                    <input
                        type="text"
                        name="hobbies"
                        value={formData.hobbies}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
