import React from 'react';
import { useState } from 'react';
import styles from '../styles/Sign.module.css'
import { useDispatch, useSelector } from 'react-redux'; 
import { connect } from '../reducers/user'; 
import { useRouter } from "next/router";


const Sign = ({close, type}) => {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();


    const dispatch = useDispatch();
    const user = useSelector((state) => state.user); 


    const sign = async() => {
        const resp = await fetch(`http://localhost:3000/users/${type ? 'signin' : 'signup'}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: userName,
                password: password,
                ...(type ? {} : { name: name }),
            }),
        });
        const data = await resp.json();
        console.log(data);
        if (data.result) {
            dispatch(connect({
                token: data.token,
                connected: true,
                username: userName,
            }));
            close(false);
            router.push('/home');
        } else {
            alert(data.error);
        }

    }

    return (
        <div className={styles.container}>
            <button className={styles.close} onClick={() => close()}>X</button>

            <img src="/logo-twitter.png" alt="" height={40} width={40} style={{ transform: "rotate(180deg)" }}/>
            <p style={{fontSize:'20px', fontWeight:'800'}}>{type ? 'Connect to Hackatweet' : 'Create your Hakatweet account'}</p>

            {type ? null : <input type="text" placeholder='name' value={name} className={styles.input} onChange={(e) => setName(e.target.value) }/>}

            <input type="text" placeholder='userName' value={userName} className={styles.input} onChange={(e) => setUserName(e.target.value) }/>
            <input type="password" placeholder='password' value={password} className={styles.input} onChange={(e) => setPassword(e.target.value) }/>

            <button className={styles.signin} onClick={() => sign()}>Sign {type ? 'in' : 'up'}</button>
        </div>
    );
};

export default Sign;