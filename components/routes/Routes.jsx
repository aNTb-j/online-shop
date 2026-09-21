import {
    BrowserRouter,
    Routes,
    Route
} from "react-router";

import Home from "../home/Home";
import Login from "../login/Login";

import NotFound from "../shared/notFound/NotFound";

const Router = () => {
    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/home"
                    element={<Home />}
                />

                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

        </BrowserRouter>
    );
};

export default Router;