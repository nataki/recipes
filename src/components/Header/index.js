import React from 'react';
import {compose} from 'recompose';
import injectSheet from 'react-jss';
import { NavLink } from 'react-router-dom';

import styles from './styles';
import logo from '../../images/logo.jpg';

function Header({classes}) {
    return <div className={classes.root}>
        <div className={classes.inner}>
            <div className={classes.logo}>
                <NavLink to='/' activeClassName='active'>
                    <img src={logo} alt="Recipes" id={'logo'}/>
                </NavLink>
            </div>
            <ul className={classes.menu}>
                <li className={classes.item}>
                    <NavLink to="/shopping-list" activeClassName='active'>Shopping List</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/recipes" activeClassName='active'>Recipes</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/about" activeClassName='active'>About</NavLink>
                </li>
            </ul>

        </div>
    </div>;
}

export default compose(injectSheet(styles))(Header);