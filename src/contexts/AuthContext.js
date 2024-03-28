// import { createContext, useContext, useState } from "react";

// export const AuthContext = createContext();

// export const useAuthContext = () => {
// 	return useContext(AuthContext);
// };

// export const AuthContextProvider = ({ children }) => {
// 	const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

// 	return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
// };
"use client"

import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setAuthUser(parsedUser);
            } catch (error) {
                console.error("Error parsing user data from localStorage:", error);
            }
        }
    }, []);

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};
