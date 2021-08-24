import React from "react";

import "./sign-in.styles.scss";

import CustomButton from "../custom-button/custom-buttom.component";
import FormInput from "../form-input/form-input.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = async (event) => {
		event.preventDefualt();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" });
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
		console.log(this.state);
	};

	render() {
		return (
			<div className="sign-in">
				<h2> I already have an account </h2>
				<span> Sign in with your email </span>

				<form>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						label="Email"
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						name="password"
						type="password"
						label="Password"
						value={this.state.password}
						handleChange={this.handleChange}
						required
					/>
					<div className="buttons">
						<CustomButton onClick={this.handleSubmit}> Sign in</CustomButton>
						<CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
							{" "}
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
