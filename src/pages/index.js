import Head from 'next/head';
import { useUser } from '@/contexts/UserContext';

import Student from './student/index';
import Teacher from './teacher/index';
import Choice from '@/pages/Choice';

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
      <Choice />
    </div>
  );
}
