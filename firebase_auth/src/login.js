import React, { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import { auth, googleProvider, githubProvider } from './firebaseConfig';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        try {
            const user = await auth.signInWithEmailAndPassword(email, pass);
            if (user) {
                alert("Login successfully");
            }
        } catch (error) {
            alert(error.message);
        }
    }

    const signInWithGoogle = async () => {
        try {
            await auth.signInWithPopup(googleProvider);
            alert("Google sign-in successful.");
        } catch (error) {
            alert(error.message);
        }
    }

    const signInWithGithub = async () => {
        try {
            await auth.signInWithPopup(githubProvider);
            alert("GitHub sign-in successful.");
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className='main_container_signup'>
            <div className='header'>
                <h2>Login</h2>
            </div>
            <div className='box'>
                <input
                    type='email'
                    value={email}
                    placeholder='E-mail'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='box'>
                <input
                    type='password'
                    value={pass}
                    placeholder='Password'
                    onChange={(e) => setPass(e.target.value)}
                />
            </div>
            <p>Don't have an account <Link to="/">Create Account</Link></p>
            <p><Link to="/forgot-password">Forgot Password?</Link></p>
            <button onClick={submit}>Login</button>
            <div className="button_container">
                <button className="google" onClick={signInWithGoogle}>
                    <img src="/google-logo.png" alt="Google Logo" className="logo" /> Continue with Google
                </button>
                <button className="github" onClick={signInWithGithub}>
                    <img src="/github-logo.png" alt="GitHub Logo" className="logo" /> Continue with GitHub
                </button>
            </div>
        </div>
    );
}

export default Login;
