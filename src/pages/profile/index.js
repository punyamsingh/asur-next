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
                        
                   </div>
              </div>



            

            </div>
              
              
              }
            
          </> : <>
            {/* Teacher profile */}
            <h1>Teacher</h1>
            </>}
        </div>
      ) : (
        <Choice />
      )}
    </div>
  )
}

export default Profile;
