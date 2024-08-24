import React, { useState } from 'react';
import { forgotPassword } from '../apis/auth';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState('');

  const handleSubmit =  async(e) => {
    e.preventDefault();
    // Add your forgot password logic here
    const data=await forgotPassword({email})
    if(data.code==1){
        alert("Email send successfully")
        navigate("/")
    }
   
    else{
        alert("Email not send")
    }
  };


  return (
    <div className="forgot-password-container">
      <h4>Forgot Password</h4>
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
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;