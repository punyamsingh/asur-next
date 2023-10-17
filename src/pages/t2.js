// to be ignored

import { useUser } from '../contexts/UserContext';

function SomeComponent() {
    const { userType } = useUser();

    return (
        <div>
            {userType ? `You are a ${userType}` : 'Please select a user type'}
        </div>
    );
}

export default SomeComponent;