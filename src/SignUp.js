import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Register = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    confirmpass: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmpass) {
      setError('Password and confirm password do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        throw new Error('Failed to register');
      }

      console.log('User registered successfully:', userData);
      setError('');
      window.alert("Redirecting to Login Page")
      navigate('/Login'); 
    } catch (error) {
      setError('Error registering user');
      console.error('Error registering user:', error);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '300px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9',
    },
    label: {
      marginBottom: '8px',
      fontSize: '14px',
      fontWeight: 'bold',
    },
    input: {
      padding: '8px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '3px',
      fontSize: '14px',
      width: '100%',
    },
    button: {
      padding: '10px',
      border: 'none',
      borderRadius: '3px',
      backgroundColor: 'black',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
    },
    error: {
      color: 'red',
      fontSize: '14px',
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
          Confirm Password:
          <input
            type="password"
            name="confirmpass"
            value={userData.confirmpass}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <button type="submit" style={styles.button}>
          SignUp
        </button>
        <br />
        {error && <span style={styles.error}>{error}</span>}
      </form>
    </div>
  );
};

export default Register;
