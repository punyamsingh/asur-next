// contexts/UserContext.js
import { createContext,useState,useEffect,useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userType,setUserType] = useState(null);
    const [user,setUser] = useState(null); // New: to store user details

    const setStudent = () => {
        setUserType('student');
        sessionStorage.setItem('userType','student');
    };

    const setTeacher = () => {
        setUserType('teacher');
        sessionStorage.setItem('userType','teacher');
    };

    // New: Login function
    const login = (email,password) => {
        // Implement authentication logic based on email and password
        // For simplicity, let's assume successful authentication
        setUser({ email,userType });
    };

    // New: Logout function
    const logout = () => {
        setUser(null);
        setUserType(null);
        sessionStorage.removeItem('userType');
    };

    // Load initial user type from sessionStorage on component mount
    useEffect(() => {
        const storedUserType = sessionStorage.getItem('userType');
        if (storedUserType) {
            setUserType(storedUserType);
        }
    },[]);

    return (
        <UserContext.Provider value={{ userType,user,setStudent,setTeacher,login,logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
