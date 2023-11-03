import React from 'react'
// import { useUser } from '../../contexts/UserContext';
import {useUser} from '@/contexts/UserContext';
import Choice from '@/components/Choice';
import Navbar from '@/components/Navbar';
import profile from '@/styles/Profile.module.css'

const Profile = () => {
    const { userType } = useUser();
    console.log(userType)
  return (
    <div>
      {userType ? ( // Check if userType is not null
        <div>
          {console.log(userType)}
          {userType === 'student' ? <>
            {
               
            <div>
              
              <div className={profile.navigation_bar}>
                <Navbar/>
              </div>

              <div className={profile.profile_container}>
                   
                   <div className={profile.profile}>
                        <div className={profile.left}>

                          <div className={profile.image}>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className={profile.avatar}/>
                          </div>

                        </div>
                        <div className={profile.right}>
                            <div className={profile.info}>
                                
                                <p> <span className={profile.credentials}>Student Name</span> Arnav Jain </p>
                                <p> <span className={profile.credentials}>Student ID</span> 2110110900 </p>
                                <p> <span className={profile.credentials}>Major</span> Bakchodi   </p>

                            
                                
                            </div>
                        </div>
                   </div>
              </div>



            

            </div>
              
              
              }
            
          </> : <>
            {/* Teacher profile */}
            {
               
               <div>
                 
                 <div className={profile.navigation_bar}>
                   <Navbar/>
                 </div>
   
                 <div className={profile.profile_container}>
                      
                      <div className={profile.profile}>
                           <div className={profile.left}>
   
                             <div className={profile.image}>
                               <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className={profile.avatar}/>
                             </div>
   
                           </div>
                           <div className={profile.right}>
                               <div className={profile.info}>
                                   
                                   <p> <span className={profile.credentials}>Student Name</span> Rahul Jayaram </p>
                                   <p> <span className={profile.credentials}>Teacher ID</span> 2110110836 </p>
                                   <p> <span className={profile.credentials}>Subject</span> Data Structure   </p>
                                   <p> <span className={profile.credentials}>Post</span> LASC </p>

   
                               
                                   
                               </div>
                           </div>
                      </div>
                 </div>
   
   
   
               
   
               </div>
                 
                 
                 }
            </>}
        </div>
      ) : (
        <Choice />
      )}
    </div>
  )
}

export default Profile;
