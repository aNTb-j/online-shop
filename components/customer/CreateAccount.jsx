import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateAccount = ({ users }) => {

	const [user, setUser] = useState({user:false, password:false})

	const handleLogin = () => {
		
	}

	return (
		<Form>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" placeholder="Username" />
				<Form.Text className="text-muted">
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>
			
			<Form.Group className="mb-3" controlId="formBasicUsername">
				<Form.Label>Username</Form.Label>
				<Form.Control type="text" placeholder="Username" />
				<Form.Text className="text-muted">
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Check type="checkbox" label="Remember user" />
			</Form.Group>

			<Button>
				Create account
			</Button>

			<Button>
				Forgot password?
			</Button>

			<Button variant="primary" type="submit">
				Enter
			</Button>
		</Form>
	)
}

export default CreateAccount;