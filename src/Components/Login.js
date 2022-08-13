import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/login.css'
import { auth } from '../Firebase/setup';

export const Login = () => {
    const Navigator = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                console.log(auth)
                Navigator('/')
            }).catch(err => {
                alert(err.message)
            })
    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth)
                if (auth) {
                    Navigator('/')
                }
            }).catch(err => {
                alert(err.message)
            })
        setEmail('');
        setPassword('');
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon logo' />
            </Link>
            <div className='login__container'>
                <h1>
                    Sign in
                </h1>
                <form onSubmit={signIn}>
                    <h5 style={{ color: 'black' }}>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5 style={{ color: 'black' }}>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signIn' onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button className='login__register' onClick={register}>Create your Amazon account</button>
            </div>
        </div >
    )
}
