import { createContext,useState,useEffect,useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userType,setUserType] = useState(null);
    const [user,setUser] = useState(null);

    // Function to set user type
    const setRole = (role) => {
        setUserType(role);
        sessionStorage.setItem('userType',role);
    };

    // New: Login function
    const login = (email,role) => {
        setUser({ email,userType: role });
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
        <UserContext.Provider value={{ userType,user,setRole,login,logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
