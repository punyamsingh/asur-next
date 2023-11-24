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

        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' />

        <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Orbitron&display=swap" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
      </Head>
      <Choice />
    </div>
  );
}
