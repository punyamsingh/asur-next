// Navbar.js
import React,{ useState,useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/Navbar.module.css';
import { useUser } from '../contexts/UserContext';

const Navbar = () => {
    const [scrolling,setScrolling] = useState(false);
    const [activeTab,setActiveTab] = useState('Dashboard');
    const router = useRouter();
    const { userType,logout } = useUser(); // Import the logout function

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
        if (pathname === '/') {
            setActiveTab('Dashboard');
        } else if (pathname === '/Dashboard') {
            setActiveTab('Dashboard');
        } else if (pathname === '/Profile') {
            setActiveTab('Profile');
        } else if (pathname === '/Reviewing') {
            setActiveTab('Reviewing');
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
                            className={activeTab === 'Dashboard' ? styles.active : ''}
                            onClick={() => handleTabClick('Dashboard')}
                        >
                            <Link href="/Dashboard">
                                Dashboard
                            </Link>
                        </li>
                        <li
                            className={activeTab === 'Profile' ? styles.active : ''}
                            onClick={() => handleTabClick('Profile')}
                        >
                            <Link href="/Profile">
                                Profile
                            </Link>
                        </li>
                        <li
                            className={activeTab === 'Logout' ? styles.active : ''}
                            onClick={() => handleTabClick('Logout')}
                        >
                            <Link href="/">
                                <button onClick={handleLogout}>Logout</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
