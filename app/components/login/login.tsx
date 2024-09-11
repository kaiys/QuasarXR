import React from 'react';
import { useState } from 'react';
import { useFormState } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { login } from '@/app/actions/auth';
import { LoginFormState } from '@/app/lib/definitions';
import styles from '../styles.module.css';

interface Props {
    isLogin : boolean,
    setIsLogin : Function
}

const normalBorder = '1px solid #319cd0';
const errorBorder = '1px solid #ff3131';

const LoginForm = ({ isLogin, setIsLogin } : Props) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [ emailBorder, setEmailBorder ] = useState(normalBorder);    
    const [ passwordBorder, setPasswordBorder ] = useState(normalBorder);

    const initialValue : LoginFormState = { errors: {} }
    const [state, formAction] = useFormState(login, initialValue);
    const loginRef = React.useRef<HTMLFormElement>(null);

    const formStyle : React.CSSProperties = {
        opacity: isLogin ? 1 : 0,
        pointerEvents: isLogin ? 'auto' : 'none',
    };

    const formClick = () => {        
        setIsLogin(false);
        loginRef.current.reset();
    }

    return (
        <form action={formAction} className={styles.authRoot} style={formStyle} ref={loginRef}>
            <div className={styles.authBackground} onClick={ formClick }/>
            <section className={styles.authContents}>
                <h2>LOGIN</h2>
                <div>
                    <label>Email</label>
                    <input className={styles.authInput} style={{ border: emailBorder }} name="email" placeholder="user@Email.com" autoComplete="username"/>
                </div>
                <div>
                    <label>Password</label>
                    <section>
                        <div style={{ position: 'relative' }}>
                            <input className={styles.authInput} style={{ border: passwordBorder }}
                                type={passwordVisible ? 'text' : 'password'}
                                placeholder="enter your password"
                                autoComplete="current-password"
                                name="password"
                            />
                            <FontAwesomeIcon 
                                onClick={() => setPasswordVisible(!passwordVisible) } 
                                icon={passwordVisible ? faEyeSlash : faEye} 
                                style={{ 
                                    position: 'absolute', 
                                    right: '5px',
                                    top: '50%', 
                                    transform: 'translateY(-50%)', 
                                    cursor: 'pointer' 
                                }}
                            />
                        </div>
                    </section>
                </div>
                <div style={{margin: '0px 0px 0px 5px', height: '30px', color: "red", fontSize: '12px'}}>
                    { state?.errors?.email && <p style={{margin: '0'}}>{"email information is not valid"}</p> }
                    { state?.errors?.password && <p style={{margin: '0'}}>{"incorrect password, put right password again"}</p> }
                    {/* {errors?.username?.type === 'required' && <p style={{margin: '0'}}>{"This field is required"}</p>}
                    {errors?.username?.type === 'database' && <p style={{margin: '0'}}>{"This username is not available"}</p>}
                    {errors?.username?.type === 'minLength' && <p style={{margin: '0'}}>{"username too short"}</p>}
                    {errors?.username?.type === 'maxLength' && <p style={{margin: '0'}}>{"username too long"}</p>} */}
                </div>
                <button type="submit">LOGIN</button>
            </section>
        </form>
    );
};

export default LoginForm;
