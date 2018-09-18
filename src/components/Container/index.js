import React from 'react';
import injectSheet from 'react-jss';
import { compose } from 'recompose';

import AuthButton from '../AuthButton';
import Header from '../Header';

import styles from './styles';

function Container( {classes, children} ){

        return <div className={classes.root}>
            <Header />
            <AuthButton />
            { children }
        </div>
}

export default compose(
    injectSheet(styles)
)(Container);