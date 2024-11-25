import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Lsall.css';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    pincode: '',
    address: '',
    state: ''
  });

  const navigate = useNavigate();

  function handleInput(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log(formData);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:3300/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    console.log(data);

    if (data.msg === 'User created') {
      navigate('/login');
    } else {
      alert('User already exists or an error occurred');
    }
  }

  return (
    <>
      <div className="logincontainer">
        <section className='banner loginbg'>
          <div className="loginsection">
            <div className="form-container" id="login-form">
              <h1 className='headlo'>Sign Up</h1>
              <form className='loginfo' onSubmit={handleSubmit}>
                <div className="oneloinput">
                  <input
                    type="text"
                    id="new-username"
                    placeholder='Username'
                    className='logininput'
                    name="username"
                    onChange={handleInput}
                    required
                  />
                  <input
                    type="email"
                    id="new-email"
                    placeholder='Email'
                    className='logininput'
                    name="email"
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="oneloinput">
                  <input
                    type="password"
                    id="new-password"
                    placeholder='Password'
                    className='logininput'
                    name="password"
                    onChange={handleInput}
                    required
                  />
                  <input
                    type="text"
                    id="new-phone"
                    placeholder='Phone Number'
                    className='logininput'
                    name="phone"
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="oneloinput">
                  <input
                    type="text"
                    id="new-pincode"
                    placeholder='Pincode'
                    className='logininput'
                    name="pincode"
                    onChange={handleInput}
                    required
                  />
                  <input
                    type="text"
                    id="new-state"
                    placeholder='State'
                    className='logininput'
                    name="state"
                    onChange={handleInput}
                    required
                  />
                </div>
                <input
                  type="text"
                  id="new-address"
                  placeholder='Address'
                  className='logininput address'
                  name="address"
                  onChange={handleInput}
                  required
                />
                <button className='loginbutton' type="submit">Sign Up</button>
              </form>
              <p className='loginp'>
                Already have an account? <Link className='logina' to="/login" id="signup-link">Login</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className='banner footer' ></section>
    </>
  );
}

export default Signup;
