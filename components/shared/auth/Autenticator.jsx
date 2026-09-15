import { useState } from "react";

import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {

	const [user, setUser] = useState(null);

	const login = (email, password) => {

		if (email === "admin@gmail.com" && password === "abc") {

			setUser({
				email: email
			});

			return true;
		}

		return false;
	};

	const logout = () => {
		setUser(null);
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				login,
				logout,
				isAuthenticated: user !== null
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};