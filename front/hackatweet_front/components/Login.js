import React from 'react';
import styles from '../styles/Login.module.css'

const Login = () => {



    return (
        <div className={styles.login}>
            <div className={styles.containerTexts}>
                <p style={{fontSize: "8vmin", fontWeight:"900"}}>See what's happening</p>
                <p style={{fontSize: "5vmin", fontWeight:"700"}}>Join Hackatweet today.</p>
                <button className={styles.button} >Sign up</button>
                <p>Already habe on account?</p>
                <button className={styles.button} >Sign in</button>

            </div>
        </div>

    );
};

export default Login;