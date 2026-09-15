import { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateAccount = () => {

	const [user, setUser] = useState({email: "",username: "",password: ""});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({...user,[name]: value});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(user);
	};

	return (
		<Form onSubmit={handleSubmit}>

			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email</Form.Label>

				<Form.Control
					type="email"
					name="email"
					placeholder="Email"
					value={user.email}
					onChange={handleChange}
				/>

				<Form.Text className="text-muted">
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>


			<Form.Group className="mb-3" controlId="formBasicUsername">
				<Form.Label>Username</Form.Label>

				<Form.Control
					type="text"
					name="username"
					placeholder="Username"
					value={user.username}
					onChange={handleChange}
				/>

				<Form.Text className="text-muted">
					Choose a username for your account.
				</Form.Text>
			</Form.Group>


			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>

				<Form.Control
					type="password"
					name="password"
					placeholder="Password"
					value={user.password}
					onChange={handleChange}
				/>
			</Form.Group>


			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Check
					type="checkbox"
					label="Remember user"
				/>
			</Form.Group>


			<Button
				variant="primary"
				type="submit"
			>
				Create account
			</Button>

		</Form>
	);
};

export default CreateAccount;