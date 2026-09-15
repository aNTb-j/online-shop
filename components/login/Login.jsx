import { useState } from "react";
import { Navigate, useNavigate } from "react-router";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useAuth } from "../shared/auth/useAuth";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({
        email: false,
        password: false
    });

    const { login, isAuthenticated } = useAuth();

    const navigate = useNavigate();

    const handleLogin = (event) => {

        event.preventDefault();

        // Validación email
        if (!email.includes("@")) {
            setErrors({
                ...errors,
                email: true
            });

            return;
        }

        // Validación password
        if (password.length < 7) {
            setErrors({
                ...errors,
                password: true
            });

            return;
        }

        // Autenticación
        const authenticated = login(email, password);

        if (!authenticated) {
            alert("Email o contraseña incorrectos");
            return;
        }

        // Login correcto
        navigate("/movies");
    };

    if (isAuthenticated) {
        return <Navigate to="/movies" replace />;
    }

    return (
        <Form onSubmit={handleLogin}>

            <Form.Group
                className="mb-3"
                controlId="formBasicLogin"
            >
                <Form.Label>Username</Form.Label>

                <Form.Control
                    type="text"
                    placeholder="Username"
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                        setErrors({
                            ...errors,
                            email: false
                        });
                    }}
                    isInvalid={errors.email}
                />

                <Form.Control.Feedback type="invalid">
                    Ingresá un email válido.
                </Form.Control.Feedback>

            </Form.Group>


            <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
            >
                <Form.Label>Password</Form.Label>

                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                        setErrors({
                            ...errors,
                            password: false
                        });
                    }}
                    isInvalid={errors.password}
                />

                <Form.Control.Feedback type="invalid">
                    La contraseña debe tener al menos 7 caracteres.
                </Form.Control.Feedback>

            </Form.Group>


            <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
            >
                <Form.Check
                    type="checkbox"
                    label="Remember user"
                />
            </Form.Group>


            <Button type="button">
                Create account
            </Button>

            <Button type="button">
                Forgot password?
            </Button>

            <Button
                variant="primary"
                type="submit"
            >
                Enter
            </Button>

        </Form>
    );
};

export default Login;