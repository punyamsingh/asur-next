import { createContext,useState,useEffect,useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userType,setUserType] = useState(null);
    const [user,setUser] = useState(null);
    const [isUserLoggedIn,setIsUserLoggedIn] = useState(false); // New state

    // Function to set user type
    const setRole = (role) => {
        setUserType(role);
        sessionStorage.setItem('userType',role);
    };

    // New: Login function
    const login = (email,role) => {
        setUser({ email,userType: role });
        setIsUserLoggedIn(true); // Set the user as logged in
    };

    // New: Logout function
    const logout = () => {
        setUser(null);
        setUserType(null);
        sessionStorage.removeItem('userType');
        setIsUserLoggedIn(false); // Set the user as logged out
    };

    // Load initial user type and login status from sessionStorage on component mount
    useEffect(() => {
        const storedUserType = sessionStorage.getItem('userType');
        if (storedUserType) {
            setUserType(storedUserType);
            setIsUserLoggedIn(true); // Set login status based on sessionStorage
        }
    },[]);

    return (
        <UserContext.Provider value={{ userType,user,isUserLoggedIn,setRole,login,logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
