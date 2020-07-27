import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../assets/images/user.jpg'

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src={logo}/>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}
                        <button onClick={props.logout}>LOGOUT</button>
                    </div>
                    : <NavLink to={'/login'} className={classes.loginLink}>LOGIN</NavLink>}
            </div>
        </header>
    );
}

export default Header;