import { useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../contexts/UserContext';
import { app } from '../db/firebase';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import styles from '@/styles/Login.module.css';

const auth = getAuth(app);

const Login = ({ setShowLogin }) => {
    const { userType,login } = useUser();
    const router = useRouter();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const handleLogin = async () => {
        try {
            if (!email || !password) {
                setError('Please fill in both fields.');
                return;
            }
            const userCredential = await signInWithEmailAndPassword(auth,email,password);
            if (userCredential && userCredential.user) {
                console.log("successful login");
                console.log(userType);
                login(email,userType);
                router.push(`/${userType}`);
                setShowLogin(false); // Close the modal
            } else {
                setError('Authentication failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Login error:',error);
            setError('Authentication failed. Please check your credentials.');
        }
    };

    return (
        <div className={styles.login_container}>
            <button className={styles.close_button} onClick={() => setShowLogin(false)}>
                Close
            </button>
            <label>
                Email:
                <input
                    className={styles.login_input}
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    className={styles.login_input}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button className={styles.login_button} onClick={handleLogin}>
                Login
            </button>
            {error && <p className={styles.login_error}>{error}</p>}
        </div>
    );
};

export default Login;
