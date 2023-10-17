// contexts/UserContext.js
import { createContext,useState,useEffect,useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userType,setUserType] = useState(null);

    const setStudent = () => {
        setUserType('student');
        localStorage.setItem('userType','student');
    };

    const setTeacher = () => {
        setUserType('teacher');
        localStorage.setItem('userType','teacher');
    };

    // Load initial user type from localStorage on component mount
    useEffect(() => {
        const storedUserType = localStorage.getItem('userType');
        if (storedUserType) {
            setUserType(storedUserType);
        }
    },[]);

    return (
        <UserContext.Provider value={{ userType,setStudent,setTeacher }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
