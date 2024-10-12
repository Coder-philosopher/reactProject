import UserContext from "./UserContext.js";
import { useState } from "react";

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
// console.log(UserContext);

export default UserContextProvider