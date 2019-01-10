import React, { Component } from 'react';
import { Button, Card, CardSection, Input, Spinner } from './Common';

export default class LoginForm extends Component {
	state = { email: '', password: '', loading: false };

	handleOnPress = () => {
		this.setState({ loading: true });
	};

	handleEmail = email => this.setState({ email });

	handlePassword = password => this.setState({ password });

	renderButton() {
		if (this.state.loading) {
			return <Spinner size="small" />;
		} 
		return (<Button whenPressed={this.handleOnPress}>Log in</Button>);
	}

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
				<CardSection>{this.renderButton()}</CardSection>
			</Card>
		);
	}
}
