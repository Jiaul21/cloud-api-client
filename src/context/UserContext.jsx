
import React, { useEffect, useState } from "react";

export const UserContext =React.createContext({}); 

const UserProvider=({childern})=>{
    
    console.log("hello")
    const [user,setUser]=useState(()=>{
        const savedUser=localStorage.getItem('userDetails');
        savedUser? JSON.parse(savedUser) : '';
    });


    return (
        <UserContext.Provider value={{user,setUser}}>
            {childern}
        </UserContext.Provider>
    );
}
export default UserProvider;