// Objeto de rutas


import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Login from '../components/login/Login';
import { AuthProvider } from "../components/shared/auth/AuthProvider";

import NotFound from "../components/shared/notFound/NotFound";
import Protected from "../components/shared/auth/Protected";

import Home from "../components/home/Home";


const App = () => {

	return (
		<BrowserRouter>
			<Routes>

				<Route path="/" element={<Navigate to={"login"} />} />
				<Route path="/login" element={<Login />} />

				<Route path="/home" element={
					<Protected>
						<AuthProvider>
							<Home />
						</AuthProvider>
					</Protected>
				} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;