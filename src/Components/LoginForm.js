import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './Common';

export default class LoginForm extends Component {
	state = { text: '' };

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						value={this.state.text}
						onChangeText={text => this.setState({ text })}
					/>
				</CardSection>
				<CardSection />
				<CardSection>
					<Button>Log in</Button>
				</CardSection>
			</Card>
		);
	}
}