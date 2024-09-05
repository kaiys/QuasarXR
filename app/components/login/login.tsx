'use client'

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginForm = ({ isLogin, setIsLogin }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const rootStyle : React.CSSProperties = {
        opacity: isLogin ? 1 : 0,
        transition: 'opacity 0.2s',
        pointerEvents: isLogin ? 'auto' : 'none',
        zIndex: 10
    }
    const bgStyle : React.CSSProperties = {
        position: 'absolute',
        left: '0px',
        top: '0px',
        width: '100%',
        height: '100%',
        background: 'black',
        opacity: 0.5,
    };
    const styleText : React.CSSProperties = {
        display: "block",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        background: '#ffffff',
        borderRadius: '8px',
        padding: '30px 30px',
        width: '300px',
        maxHeight: '90vh'
    };

    const inputStyle : React.CSSProperties = {
        display: 'block',
        width: '100%',
        height: '30px',
        fontSize: '15px',
        border: '1px solid red',
        borderRadius: '5px',
        margin: '5px 0px',
        background: '#efefef'
    };

    return (
        <div style={rootStyle}>
            <div style={bgStyle} onClick={ () => isLogin ? setIsLogin(!isLogin) : false }/>
            <div style={styleText}>
                <h2>LOGIN</h2>
                <form>
                    <div>
                        <label>Email</label>
                        <input style={inputStyle} type="email" placeholder="user@email.com"/>
                        <div></div>
                    </div>
                    <div style={labelStyle}>
                        <label>Password</label>
                        <div style={{
                            position: 'relative'
                        }}>
                            <input style={inputStyle} 
                                type={passwordVisible ? 'text' : 'current-password'}
                                placeholder="Enter your password"/>
                            <FontAwesomeIcon onClick={() => setPasswordVisible(!passwordVisible) } icon={passwordVisible ? faEyeSlash : faEye} style={{ position: 'absolute', right: '5px',top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}/>
                        </div>
                    </div>
                    <button type="submit">LOGIN</button>
                </form>
            </div>
        </div>
        
    );
};

export default LoginForm;
