import React from 'react';
// import { useUser } from '../../contexts/UserContext';
import { useUser } from '@/contexts/UserContext';
import Choice from '@/pages/Choice';
import Navbar from "./teacherNavbar";
import profile from '@/styles/Profile.module.css';

const Profile = () => {
    const { userType } = useUser();
    console.log(userType);
    return (
        <div>
            {userType ? ( // Check if userType is not null
                <div>
                    <div className={profile.navigation_bar}>
                        <Navbar />
                    </div>
                    <div className={profile.profile_container}>
                        <div className={profile.profile}>
                            <div className={profile.left}>
                                <div className={profile.image}>
                                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className={profile.avatar} />
                                </div>
                                <h1 className={profile.name}>Snehasis Mukherjee</h1>

                            </div>
                            <div className={profile.right}>
                                <div className={profile.info}>
                                <h4 className={profile.bi}>Basic Information</h4>

                                    <p className={profile.white}> <span className={profile.credentials}>Teacher ID</span> 2110110836 </p>
                                    <p className={profile.white}> <span className={profile.credentials}>Department</span> CSE   </p>
                                    <p className={profile.white}> <span className={profile.credentials}>E-Mail</span> snehasis.mukherjee@snu.edu.in   </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                // <div>
                //     {console.log(userType)}
                //     {userType === 'student' ? <>
                //         {

                //             <div>

                //                 <div className={profile.navigation_bar}>
                //                     <Navbar />
                //                 </div>

                //                 <div className={profile.profile_container}>

                //                     <div className={profile.profile}>
                //                         <div className={profile.left}>

                //                             <div className={profile.image}>
                //                                 <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className={profile.avatar} />
                //                             </div>

                //                         </div>
                //                         <div className={profile.right}>
                //                             <div className={profile.info}>

                //                                 <p> <span className={profile.credentials}>Teacher Name</span> Arnav Jain </p>
                //                                 <p> <span className={profile.credentials}>Teacher ID</span> 2110110900 </p>
                //                                 <p> <span className={profile.credentials}>Depa</span> Bakchodi   </p>



                //                             </div>
                //                         </div>
                //                     </div>
                //                 </div>





                //             </div>


                //         }

                //     </> : <>
                //         {/* Teacher profile */}
                //         {

                //             <div>
                //                 <div className={profile.navigation_bar}>
                //                     <Navbar />
                //                 </div>
                //                 <div className={profile.profile_container}>
                //                     <div className={profile.profile}>
                //                         <div className={profile.left}>
                //                             <div className={profile.image}>
                //                                 <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className={profile.avatar} />
                //                             </div>
                //                         </div>
                //                         <div className={profile.right}>
                //                             <div className={profile.info}>
                //                                 <p> <span className={profile.credentials}>Teacher Name</span> Snehasis Mukherjee </p>
                //                                 <p> <span className={profile.credentials}>Teacher ID</span> 2110110836 </p>
                //                                 <p> <span className={profile.credentials}>Department</span> CSE   </p>
                //                             </div>
                //                         </div>
                //                     </div>
                //                 </div>
                //             </div>


                //         }
                //     </>}
                // </div>
            ) : (
                <Choice />
            )}
        </div>
    );
};

export default Profile;