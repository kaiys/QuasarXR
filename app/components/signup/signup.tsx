'use client'

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { auth } from '@/app/api/auth/route'

const SignupForm = ({ isSignedUp, setIsSignedUp }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [policyAgreement, setPolicyAgreement ] = useState(false);

    const rootStyle : React.CSSProperties = {
        opacity: isSignedUp ? 1 : 0,
        transition: 'opacity 0.2s',
        pointerEvents: isSignedUp ? 'auto' : 'none',
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

    const iconStyle : React.CSSProperties = {
        fontSize: '24px',
        lineHeight : 1,
    }

    const labelStyle : React.CSSProperties = {
    };
    return (
    <form>
        <div style={rootStyle}>
            <div style={bgStyle} onClick={ () => isSignedUp ? setIsSignedUp(!isSignedUp) : false }/>
            <div style={styleText}>
                <h2>Sign Up</h2>
                <form>
                    <div style={labelStyle}>
                        <label>Username</label>
                        <input style={inputStyle} type="username"/>
                    </div>
                    <div style={labelStyle}>
                        <label>Email</label>
                        <input style={inputStyle} type="email" placeholder="user@email.com"/>
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
                    <div>
                        <input type="checkbox"/> I agree to the <Link href="privacy" passHref legacyBehavior><a target="_blank" rel="noopener noreferrer">Terms of Use</a></Link> and Privacy Policy
                    </div>
                    <div>
                        <input type="checkbox"/>I want receive newsletter
                    </div>
                    <button disabled={!policyAgreement} type="submit">Create Account</button>
                </form>
            </div>
        </div>
    </form>
    );
};

export default SignupForm;
