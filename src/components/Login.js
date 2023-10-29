import { useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../contexts/UserContext';
import { app } from '../db/firebase'; // Import Firebase authentication
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import styles from '@/styles/Login.module.css';

const auth = getAuth(app);

const Login = () => {
    const { userType,login } = useUser(); // Import the login function
    const router = useRouter();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const handleLogin = async () => {
        try {
            // console.log("this is a", userType)
            if (!email || !password) {
                setError('Please fill in both fields.');
                return;
            }
            const userCredential = await signInWithEmailAndPassword(auth,email,password);
            // const user = userCredential.user;
            if (userCredential && userCredential.user) {
                // Call the login function from the context and specify the role ('student' or 'teacher')
                console.log("successful login");
                login(email,userType);

                // Redirect to the dashboard
                router.push('/dashboard');
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
