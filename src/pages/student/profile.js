import React from 'react';
// import { useUser } from '../../contexts/UserContext';
import { useState,useEffect } from 'react';
import useSWR from 'swr';
import { useUser } from '@/contexts/UserContext';
import Choice from '@/pages/Choice';
import Navbar from "./studentNavbar";
import profile from '@/styles/Profile.module.css';
import { HashLoader } from 'react-spinners';
import styles from "@/styles/Student.module.css";
const fetcher = (url) => fetch(url).then((res) => res.json());
import styles from '@/styles/Profile.module.css';

const Profile = () => {
    const { userType,user} = useUser();
    const [rollNumber,setRollNumber] = useState(null);
    const[studProfile,setStudProfile] = useState(null);

    const { data: rollNumberData,error: rollNumberError } = useSWR(
        user ? `/api/GetRollNumFromEmail?email="${user.email}"` : null,
        fetcher
    );

    const { data:studProfileData,error: studProfileError } = useSWR(
        rollNumber ? `/api/GetStudentProfile?rollNo=${rollNumber}` : null,
        fetcher
    );

    useEffect(() => {
        if (user)
        {
            
        console.log(user.email)
        }
        if (rollNumberData) {
            // console.log(rollNumberData[0]?.roll_no);
            setRollNumber(rollNumberData[0]?.roll_no);
            console.log(rollNumber)
            if (rollNumber)
            {
                console.log(studProfileData)
            }
        }
    },[rollNumberData],[studProfileData]);
    // console.log(userType);
    return (
        <div>
            {userType ? ( // Check if userType is not null
                <div>
                    <div className={styles.navigation_bar}>
                        <Navbar />
                    </div>

                    <div className={profile.profile_container}>
                        <div className={profile.profile}>
                            
                           
                                {/* <div className={profile.info}>

                                    <h4 className={styles.bi}>Basic Information</h4>
                                    
                                    <p className={profile.white}> <span className={profile.credentials}>Student ID</span>2110110410 </p>
                                    <p className={profile.white}> <span className={profile.credentials}>Major</span> CSE   </p>
                                    <p className={profile.white}> <span className={profile.credentials}>E-Mail</span> aj236@snu.edu.in   </p>

                                </div> */}

                                {studProfileData ? (
                                    <>
                                    <div className={profile.left}>
                                    <div className={profile.image}>
                                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className={profile.avatar} />
                                    </div>
                                    <h1 className={profile.name}>{studProfileData[0]?.First_Name+" "+studProfileData[0].Last_Name}</h1>
                                </div>

                                    <div className={profile.right}>
                                    <div className={profile.info}>
                                        <h4 className={profile.bi}>Basic Information</h4>
                                        <p className={profile.white}>
                                        <span className={profile.credentials}>Student ID</span>
                                        {studProfileData[0]?.Roll_No}
                                        </p>
                                        <p className={profile.white}>
                                        <span className={profile.credentials}>Major</span>
                                        CSE
                                        </p>
                                        <p className={profile.white}>
                                        <span className={profile.credentials}>E-Mail</span>
                                        {user?.email}
                                        </p>
                                    </div>
                                    </div>
                                    </>
                                    ) : (
                                        <div className={styles.loader}>
                                        <HashLoader color="red" loading={true} size={50} />
                                    </div>
                                    )}
                            
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
