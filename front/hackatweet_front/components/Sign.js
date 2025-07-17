import React from 'react';
import { useState } from 'react';
import styles from '../styles/Sign.module.css'

const Sign = ({close, type}) => {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


    console.log(name, userName, password);
    return (
        <div className={styles.container}>
            <button className={styles.close} onClick={() => close()}>X</button>

            <img src="/logo-twitter.png" alt="" height={40} width={40} style={{ transform: "rotate(180deg)" }}/>
            <p style={{fontSize:'20px', fontWeight:'800'}}>{type ? 'Connect to Hackatweet' : 'Create your Hakatweet account'}</p>

            {type ? null : <input type="text" placeholder='name' value={name} className={styles.input} onChange={(e) => setName(e.target.value) }/>}

            <input type="text" placeholder='userName' value={userName} className={styles.input} onChange={(e) => setUserName(e.target.value) }/>
            <input type="password" placeholder='password' value={password} className={styles.input} onChange={(e) => setPassword(e.target.value) }/>

            <button className={styles.signin}>Sign {type ? 'in' : 'up'}</button>
        </div>
    );
};

export default Sign;