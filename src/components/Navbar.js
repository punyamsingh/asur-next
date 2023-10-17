// Navbar.js
import React,{ useState,useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '/styles/Navbar.module.css';

const Navbar = () => {
    const [scrolling,setScrolling] = useState(false);
    const [activeTab,setActiveTab] = useState('Home');
    const router = useRouter();

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
            setActiveTab('Home');
        } else if (pathname === '/Tips') {
            setActiveTab('Tips');
        } else if (pathname === '/Reviewing') {
            setActiveTab('Reviewing');
        }
    },[router.pathname]);

    return (
        <nav className={`${styles.nav} ${scrolling ? styles.affix : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="">
                        A.S.U.R.
                    </Link>
                </div>
                <div id="mainListDiv" className={styles.mainList}>
                    <ul className={styles.navlinks}>
                        <li
                            className={activeTab === 'Home' ? styles.active : ''}
                            onClick={() => handleTabClick('Home')}
                        >
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li
                            className={activeTab === 'Tips' ? styles.active : ''}
                            onClick={() => handleTabClick('Tips')}
                        >
                            <Link href="/Tips">
                                Tips
                            </Link>
                        </li>
                        <li
                            className={activeTab === 'Reviewing' ? styles.active : ''}
                            onClick={() => handleTabClick('Reviewing')}
                        >
                            <Link href="/Reviewing">
                                Reviewing
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
