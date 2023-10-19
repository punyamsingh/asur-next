import Head from 'next/head';
import { useUser } from '../contexts/UserContext';

export default function Choice() {
    const { userType,setStudent,setTeacher } = useUser();

    return (
        <div>
            <Head>
                <title>A.S.U.R.</title>
                <meta name="description" content="ASUR" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* {redirect} */}

            {console.log(userType)}
            
            <div>
                <h1>Welcome to the Next.js Site</h1>
                <button onClick={setStudent}>I'm a Student</button>
                <button onClick={setTeacher}>I'm a Teacher</button>
                {userType && <p>Your user type is: {userType}</p>}

                <SomeComponent />
            </div>


        </div>
    );
}

function SomeComponent() {
    const { userType } = useUser();

    return (
        <div>
            {userType ? `You are a ${userType}` : 'Please select a user type'}
        </div>
    );
}
