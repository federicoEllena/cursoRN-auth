import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button } from './Components/Common';
import LoginForm from './Components/LoginForm';

export default class App extends Component {
    render() {
        return (
            <View>
                < Header headerText="Welcome!" />
                <LoginForm />
            </View>
        );
    }
}