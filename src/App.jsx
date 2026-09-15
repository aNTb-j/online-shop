// Objeto de rutas

import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Login from '../components/login/Login'
import NotFound from "../components/shared/notFound/NotFound"
import Protected from "../components/shared/auth/Protected";
import { AuthProvider } from "../components/shared/auth/Autenticator";

function App() {

	return (
		<BrowserRouter>
			<Routes>

				<Route path="/" element={<Navigate to={"login"} />} />
				<Route path="/login" element={<Login />} />

				<Route path="/dashboard" element={
					<Protected>
						<AuthProvider>
							<App />
						</AuthProvider>
					</Protected>
				} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}


export default App
