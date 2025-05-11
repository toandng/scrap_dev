
import { createContext, useEffect, useState } from "react";
import authServices from "../services/authServices";
import PropTypes from "prop-types";
export const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                setIsloading(true);
                const res = await authServices.getCurrentUser();
                setUser(res.user);
            } catch (error) {
                console.log(error);
            } finally {
                setIsloading(false);
            }
        })();
    }, []);

    const values = {
        user,
        setUser,
        isLoading,
    };

    return (
        <UserContext.Provider value={values}>{children}</UserContext.Provider>
    );
}

export default UserProvider;
UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };