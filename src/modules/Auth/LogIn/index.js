/*import React from 'react';
import Login from '../../../components/Login';

const LogIn = (props) => <Login {...props} />;

export default LogIn;*/

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Container from  '../../../components/Container';
import api from '../../../api.js'

export default class Login extends Component {
    state = {
        redirectToReferrer: false
    };

    login = () => {
        api.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return (
            <Container>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </Container>
        );
    }
}