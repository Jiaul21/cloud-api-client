
import React, { useEffect, useState } from "react";

export const UserContext =React.createContext({}); 

const UserProvider=({children})=>{
    
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('userDetails');
        return savedUser ? JSON.parse(savedUser) : '';
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem('userDetails', JSON.stringify(user));
        } else {
            localStorage.removeItem('userDetails');
        }
    }, [user]);

    console.log("userContext user: ",user);


    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider;