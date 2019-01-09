import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './Common';

export default class LoginForm extends Component {
	state = { email: '', password: '' };

	handleOnPress = () => {};

	handleEmail = email => this.setState({ email });

	handlePassword = password => this.setState({ password });

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						enableSecureTextEntry={false}
						placeHolder="email@domain.com"
						label="Email"
						value={this.state.email}
						onChangeText={this.handleEmail}
					/>
				</CardSection>
				<CardSection>
					<Input
						enableSecureTextEntry
						placeHolder="*****" 
						label="Password" 
						value={this.state.password} 
						onChangeText={this.handlePassword} 
					/>
				</CardSection>
				<CardSection>
					<Button whenPressed={this.handleOnPress}>Log in</Button>
				</CardSection>
			</Card>
		);
	}
}