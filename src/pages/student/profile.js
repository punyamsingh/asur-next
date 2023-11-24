import React from 'react';
// import { useUser } from '../../contexts/UserContext';
import { useUser } from '@/contexts/UserContext';
import Choice from '@/pages/Choice';
import Navbar from "./studentNavbar";
import styles from '@/styles/Profile.module.css';

const Profile = () => {
    const { userType } = useUser();
    // console.log(userType);
    return (
        <div>
            {userType ? ( // Check if userType is not null
                <div>
                    <div className={styles.navigation_bar}>
                        <Navbar />
                    </div>

                    <div className={styles.profile_container}>
                        <div className={styles.profile}>
                            <div className={styles.left}>
                                <div className={styles.image}>
                                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className={styles.avatar} />
                                </div>
                                <h1 className={styles.name}>Arnav Jain</h1>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.info}>

                                    <h4 className={styles.bi}>Basic Information</h4>
                                    
                                    <p className={styles.white}> <span className={styles.credentials}>Student ID</span> 2110110900 </p>
                                    <p className={styles.white}> <span className={styles.credentials}>Major</span> CSE   </p>
                                    <p className={styles.white}> <span className={styles.credentials}>E-Mail</span> aj236@snu.edu.in   </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Choice />
            )}
        </div>
    );
};

export default Profile;
