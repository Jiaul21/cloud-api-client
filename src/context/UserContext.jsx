
import React from "react";

 const UserContext=createContext();

 export const ContextProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
      const savedAuth = localStorage.getItem("auth");
      return savedAuth
        ? JSON.parse(savedAuth)
        : { isAuthenticated: false, user: null };
    });
    console.log("provider auth info", auth);
    const [loadig, setLoading] = useState(true);
    useEffect(() => {
      setLoading(false);
    }, []);
    useEffect(() => {
      localStorage.setItem("auth", JSON.stringify(auth));
    }, [auth]);
    const signOut = () => {
      setLoading(false);
      setAuth({
        isAuthenticated: false,
        user: null,
        // write somethings
      });
    };
  
    return (
      <UserContext.Provider value={{ auth, setAuth, signOut, loadig }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export default ContextProvider;