import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Signup.module.css';
import { Navigate } from 'react-router-dom';
const Signup = () => {

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    number: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  function showPass() {
    setShow(!show);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    // Reset error message when user starts typing
    setErrors({ ...errors, [name]: '' });
  }

  function handleForm(event) {
    event.preventDefault();

    const validationErrors = {};

    // Name validation
    if (!/^[A-Za-z ]+$/.test(formData.name)) {
      validationErrors.name = 'Only alphabets are allowed';
    }

    // Username validation
    if (!/^[a-zA-Z0-9!@#$%^&*]+$/.test(formData.username)) {
      validationErrors.username = 'Alphanumeric characters and special characters only';
    }

    // Password validation
    if (!/^[a-zA-Z0-9!@#$%^&*]+$/.test(formData.password)) {
      validationErrors.password = 'Alphanumeric characters and special characters only';
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Password must match';
    }

    // Email validation
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!/^\d{1,10}$/.test(formData.number)) {
      validationErrors.number = 'Write your 10 digit phone number';
    }

    // Set errors
    setErrors(validationErrors);

    // If no errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission
      console.log('Form submitted:', formData);
      alert('Account Created!!! LogIn Now');
      navigate('/');
    }


  }

  return (
    <div className={styles.container}>
      <div className={styles.div1}>
        <h4>Create New Account</h4>
      </div>
      <div className={styles.div2}>
        <form onSubmit={handleForm}>
          <div className={styles.input_row}>
            <div className={styles.first_div}>
              <input type='text' name='name' required placeholder='Name' value={formData.name} onChange={handleInputChange} className={styles.user} />
              {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>
            <div className={styles.first_div}>
              <input type='text' name='username' required placeholder='Username' value={formData.username} onChange={handleInputChange} className={styles.user} />
              {errors.username && <span className={styles.error}>{errors.username}</span>}
            </div>
          </div>
          <div className={styles.input_row}>
            <div className={styles.first_div}>
              <input type='email' name='email' required placeholder='Email' value={formData.email} onChange={handleInputChange} className={styles.user} />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>
            <div className={styles.first_div}>
              <input type='number' name='number' required placeholder='Phone No.' value={formData.number} onChange={handleInputChange} className={styles.user} />
              {errors.number && <span className={styles.error}>{errors.number}</span>}
            </div>
          </div>
          <div className={styles.input_row}>
            <div className={styles.first_div}>
              <input type={show ? 'text' : 'password'} name='password' required placeholder='Password' value={formData.password} onChange={handleInputChange} className={styles.pass} />
              {errors.password && <span className={styles.error}>{errors.password}</span>}
            </div>
            <div className={styles.first_div}>
              <input type={show ? 'text' : 'password'} name='confirmPassword' required placeholder='Confirm Password' value={formData.confirmPassword} onChange={handleInputChange} className={styles.pass} />
              {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
            </div>
          </div>
          <div className={styles.show} onClick={showPass}>
            <input type='checkbox' id='myCheckbox' className={styles.check} />
            <label htmlFor='myCheckbox'>
              Show Password
            </label>
          </div>
          <div className={styles.btn_div}>
            <input type='submit' title='Login' value='SIGN UP' className={styles.btn} />
          </div>
          <div className={styles.login}>
            <span>OR <Link to={'/'}>Sign In</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

