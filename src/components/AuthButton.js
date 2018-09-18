import React  from 'react';
import { withRouter } from 'react-router-dom';

import api from '../api.js'

const AuthButton = withRouter(
    ({ history }) =>
        api.isAuthenticated ? (
            <p>
                Welcome!{" "}
                <button
                    onClick={() => {
                        api.signout(() => history.push("/"));
                      }}
                    >
                    Sign out
                </button>
            </p>
        ) : (
            <p>You are not logged in.</p>
        )
);

export default AuthButton;