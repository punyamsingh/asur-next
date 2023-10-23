import { useUser } from '@/contexts/UserContext';
import Navbar from '@/components/Navbar'; // Import the Navbar component

export default function Dashboard() {
    const { user } = useUser();

    return (
        <div>
            <Navbar />
            {user ? (
                <div>
                    <p>Hello, {user.email}</p>
                    <p>You are a {user.userType}</p> Display the user's type
                </div>
            ) : (
                <p>Please log in to see your dashboard.</p>
            )}
        </div>
    );
}
