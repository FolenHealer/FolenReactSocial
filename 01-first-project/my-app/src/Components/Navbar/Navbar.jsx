import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink className={classes.link} to='/Profile' activeClassName={classes.active}>Profile</NavLink>
            </div>

            <div className={classes.item}>
                <NavLink className={classes.link} to='/Dialogs' activeClassName={classes.active}>Messages</NavLink>
            </div>

            <div className={classes.item}>
                <NavLink className={classes.link} to='/News' activeClassName={classes.active}>News</NavLink>
            </div>

            <div className={classes.item}>
                <NavLink className={classes.link} to='/Music' activeClassName={classes.active}>Music</NavLink>
            </div>

            <div className={classes.item}>
                <NavLink className={classes.link} to='/Settings' activeClassName={classes.active}>Settings</NavLink>
            </div>

            <div className={classes.users}>
                <NavLink className={classes.link} to='/Users' activeClassName={classes.active}>Users</NavLink>
            </div>

        </nav>
    );
}
export default Navbar;