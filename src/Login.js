import React, { useContext, useState } from 'react';
import './Login.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; 
import UserContext from './Context/UserContext';

const Llogin = () => {
  const{user,login}=useContext(UserContext);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = loginData;

    try {
      const response = await fetch('http://localhost:8080/users');
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const users = await response.json();
      const foundUser = users.find(user => user.email === email);

      if (!foundUser) {
        setError('User not found. Please check your email.');
        navigate('/signup'); 
        window.alert('Incorrect Username Redirecting to RegisterPage');
        return;
      }

      if (foundUser.password !== password) {
        setError('Incorrect password. Please try again.');
        navigate('/signup')
        return;
      }

      setError(''); 
      login(email)
      console.log(email)
      console.log('Login successful:', foundUser);
      window.alert('Successfully Logged In');
      navigate('/product'); 

    } catch (error) {
      setError('Error fetching user data');
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={loginData.email}
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
            value={loginData.password}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <Button onClick={handleLogin} style={styles.button} variant="text">SignIn</Button>
        <br />
        {error && <span style={styles.error}>{error}</span>}
      </form>
    </div>
  );
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
    margin: '20px',
    width:'250px',
    height: '40px',
    backgroundcolor:'black',
    color:'black',
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

export default Llogin;