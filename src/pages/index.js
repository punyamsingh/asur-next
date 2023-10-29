import Head from 'next/head';
import { useUser } from '../contexts/UserContext';
import Choice from '../components/Choice';
import Student from './student/index';
import Teacher from './teacher/index';

export default function Home() {
  const { userType,logout } = useUser(); // Import the logout function

  const handleLogout = () => {
    // Call the logout function to clear user data
    logout();
  };

  return (
    <div>
      <Head>
        <title>A.S.U.R.</title>
        <meta name="description" content="ASUR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1>ASUR</h1> */}
      {userType ? ( // Check if userType is not null
        <div>
          {console.log(userType)}
          {userType === 'student' ? <Student /> : <Teacher />}
        </div>
      ) : (
        <Choice />
      )}
    </div>
  );
}
