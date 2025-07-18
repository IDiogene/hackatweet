import React, { useState } from 'react';
import styles from '../styles/Login.module.css'
import Sign from './Sign';

const Login = () => {
    const [signin, setSignin] = useState(false)
    const [signup, setSignup] = useState(false);


    return (
        <div className={styles.login}>
            <div className={styles.containerTexts}>
                <p style={{fontSize: "8vmin", fontWeight:"900"}}>See what's happening</p>
                <p style={{fontSize: "5vmin", fontWeight:"700"}}>Join Hackatweet today.</p>

                {signin ? <Sign close={setSignin} type={false}/> : <button className={styles.button} onClick={() => {setSignin(true); setSignup(false)}}>Sign up</button>}
                <p>Already habe on account?</p>
                {signup ? <Sign close={setSignup} type={true} /> : <button className={styles.button} onClick={() => {setSignup(true); setSignin(false)}}>Sign in </button>}

            </div>
        </div>

    );
};

export default Login;