import React from 'react';
import classes from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog}>
            <img className={classes.img} src="https://placehold.it/30/0" alt=""/>
            <NavLink to={path} className={classes.link}>{props.name}</NavLink>
        </div>
    );
}
export default Dialog;