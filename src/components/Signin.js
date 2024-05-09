import React from 'react'
import styles from './Signin.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Signin = () => {

    const [show,setShow]= useState(false);

    function showPass(){
        setShow(!show);
    }

    function handleForm(e){
        // e.preventDefault();
        alert('Logged In Successfully!!!');

    }
    return (
        <div className={styles.container}>
            <div className={styles.div1}>
                <h2>Login</h2>
                <h4>Sign in to Continue</h4>
            </div>
            <div className={styles.div2}>
                <form onSubmit={handleForm}>
                    <input type='text' name='username' required placeholder='Username' className={styles.user}/>
                    <input type={show? 'text':'password'} name='password' required placeholder='Password' className={styles.pass} />

                    <div className={styles.show} onClick={showPass}>
                        <input type='checkbox' id='myCheckbox' className={styles.check}/>
                        <label htmlFor='myCheckbox'>
                            Show Password
                        </label>
                    </div>

                    <input type='submit' title='Login' value='LOGIN' />
                </form>
                <span>Don't have Account? <Link to={'/sign-up'}>SignUp</Link></span>
            </div>
        </div>
    )
}

export default Signin
