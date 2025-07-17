import React from 'react';
import { useState } from 'react';
import styles from '../styles/Signin.module.css'

const Signin = () => {
    const [creatUser, setCreatUser] = useState({
        name:'',
        userName:'',
        password:''
    })

    return (
        <div className={styles.container}>
            <button className={styles.close}>X</button>
            <p>Create your Hakatweet account</p>
            <input type="text" placeholder='name' value={creatUser.name} className={styles.input}/>
            <input type="text" placeholder='userName' value={creatUser.userName} className={styles.input}/>
            <input type="password" placeholder='password' value={creatUser.password} className={styles.input}/>
            <button className={styles.signin}>Sign in</button>
        </div>
    );
};

export default Signin;