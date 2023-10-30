import React,{ useState,useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/Navbar.module.css';
import { useUser } from '../contexts/UserContext';

const Navbar = () => {
    const [scrolling,setScrolling] = useState(false);
    const [activeTab,setActiveTab] = useState('dashboard');
    const router = useRouter();
    const { logout,userType } = useUser(); // Import the logout function and userType

    const handleLogout = () => {
        // Call the logout function to clear user data
        logout();
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    // Add scroll event listener when component mounts
    useEffect(() => {
        window.addEventListener('scroll',handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll',handleScroll);
        };
    },[]);

    // Update active tab based on current pathname
    useEffect(() => {
        const pathname = router.pathname;
        if (pathname === '') {
            setActiveTab('dashboard');
        } else if (pathname === '/') {
            setActiveTab('dashboard');
        } else if (pathname === '/dashboard') {
            setActiveTab('dashboard');
        } else if (pathname === '/profile') {
            setActiveTab('profile');
        }
    },[router.pathname]);

    return (
        <nav className={`${styles.nav} ${scrolling ? styles.affix : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="">
                        A.S.U.R. {userType}
                    </Link>
                </div>
                <div id="mainListDiv" className={styles.mainList}>
                    <ul className={styles.navlinks}>
                        <li
                            className={activeTab === 'dashboard' ? styles.active : ''}
                            onClick={() => handleTabClick('dashboard')}
                        >
                            <Link href="/dashboard">Dashboard</Link>
                        </li>
                        <li
                            className={activeTab === 'profile' ? styles.active : ''}
                            onClick={() => handleTabClick('profile')}
                        >
                            <Link href="/profile">Profile</Link>
                        </li>
                        <li onClick={() => handleTabClick('logout')}>
                            <Link href="/">
                                <button onClick={handleLogout}>Go back</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
