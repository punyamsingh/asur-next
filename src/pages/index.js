import Head from 'next/head';
import { useUser } from '../contexts/UserContext';
import Choice from '../components/Choice';
import Student from './student/index'
import Teacher from './teacher/index'

export default function Home() {
  const { userType } = useUser();

  let redirect = null;

  if (userType === null) {
    redirect = (<p>
      <Choice />
    </p>);
  } else if (userType === 'student') {
    redirect = (<p>
      <Student />
    </p>);
  } else if (userType === 'teacher') {
    redirect = (<p>
      <Teacher />
    </p>);
  }

  return (
    <div>
      <Head>
        <title>A.S.U.R.</title>
        <meta name="description" content="ASUR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>ASUR</h1>
      {redirect}
      {console.log(userType)}
    </div>
  );
}
