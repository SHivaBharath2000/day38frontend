import React, { useState } from 'react';
import { URLShortner } from '../../apis/auth';


const Form = () => {
    const [email, setEmail] = useState('');
    const [longURL, setLongURL] = useState('');

    const handleSubmit =async (e) => {
        e.preventDefault();
        const data = await URLShortner({ email, longURL});
        try{
        if (data.code === 1) {
            alert("URL shortned successfully.");
            
          } else {
            alert("Invalid URL");
          }
        } catch (error) {
          console.log(error);
          alert("An error occurred during URL shorthand.");
        }
    };

    return (
        <div className="form-container">
             <h4>URL Shortner</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="longURL">Long URL:</label>
                    <input
                        type="text"
                        id="longURL"
                        value={longURL}
                        onChange={(e) => setLongURL(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
