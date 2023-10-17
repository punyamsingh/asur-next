// to be ignored

import { useUser } from '../contexts/UserContext';

function HomePage() {
    const { userType,setStudent,setTeacher } = useUser();

    return (
        <div>
            <h1>Welcome to the Next.js Site</h1>
            <button onClick={setStudent}>I'm a Student</button>
            <button onClick={setTeacher}>I'm a Teacher</button>
            {userType && <p>Your user type is: {userType}</p>}

            <SomeComponent />
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

export default HomePage;
