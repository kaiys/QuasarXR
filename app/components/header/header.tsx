'use client'
import styles from './styles.module.css';
import SignupForm from '../signup/signup';
import LoginForm from '../login/login';
import { logout } from '@/app/actions/auth'; 
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function Header() {
    const [showSignup, setShowSignup] = useState(false);
    const handleSignClick = () => setShowSignup(true);
    const [showLogin, setShowLogin ] = useState(false);
    const handleLoginClick = () => setShowLogin(true);
    const handleLogoutClick = () => {
        logout().then( () => {
            //console.log( 'session deleted' );
        } );
    }
    const { data : session } = useSession();

    return (
        <section>
            <div className={styles['layout-head']}>
                <SignupForm isSignedUp={showSignup} setIsSignedUp={setShowSignup}/>
                <LoginForm isLogin={showLogin} setIsLogin={setShowLogin}/>
                
                <div className={styles['content-area']}>
                    { session && <div className={styles['auth-text']}> session.user </div> }
                    { session && <div className={styles['button-link']} onClick={handleLogoutClick}>로그아웃</div> }
                    { ! session && <div className={styles['button-link']} onClick={handleSignClick}>회원가입</div> }
                    { ! session && <div className={styles['button-link']} onClick={handleLoginClick}>로그인</div> }

                </div>
        </div>
        </section>
    )
}