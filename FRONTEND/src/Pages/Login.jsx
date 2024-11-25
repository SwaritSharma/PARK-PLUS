import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Lsall.css'

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  function handleInput(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:3300/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    console.log(data);

    if (res.ok) {
      alert("succesfully logined!!")
      navigate('/dashboard');
    } else {
      alert(data.msg);
    }
  }

  return (
    <>
      <div className="logincontainer">
        <section className='banner loginbg'>
          <div className="loginsection">
            <div className="form-container" id="login-form">
              <h1 className='headlo'>Login</h1>
              <form className='loginfo' onSubmit={handleSubmit}>
                <input type="text" id="username" placeholder='Username' className='logininput' name="username" required onChange={handleInput}/>
                <input type="password" id="password" placeholder='Password' className='logininput' name="password" required onChange={handleInput} />
                <button className='loginbutton' type="submit">Login</button>
              </form>
              <p className='loginp'>Don't have an account? <Link className='logina' to="/signup" id="signup-link">Sign up</Link></p>
            </div>
          </div>
        </section>
      </div>
      <section className='banner footer' ></section>
    </>
  );
}

export default Login;
