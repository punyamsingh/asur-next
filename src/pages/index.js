import Head from 'next/head';
import { useUser } from '../contexts/UserContext';

export default function Home() {
  const { userType } = useUser();

  let redirect = null;

  if (userType === undefined) {
    redirect = (<p>
      {/* <Choice /> */}
    </p>);
  } else if (userType === 'student') {
    redirect = (<p>
      {/* Type padhle */}
    </p>);
  } else if (userType === 'teacher') {
    redirect = (<p>
      {/* Teachinggggg */}
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

      {redirect}
    </div>
  );
}
