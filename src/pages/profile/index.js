import React from 'react'
// import { useUser } from '../../contexts/UserContext';
import {useUser} from '@/contexts/UserContext';
import Choice from '@/components/Choice';

const Profile = () => {
    const { userType } = useUser();
    console.log(userType)
  return (
    <div>
      {userType ? ( // Check if userType is not null
        <div>
          {console.log(userType)}
          {userType === 'student' ? <>
            {/* Student profile */}
            <h1>Student</h1>
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
