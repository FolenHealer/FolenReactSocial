import React from "react";
import classes from './Users.module.css'
import userPhoto from '../../assets/images/user.jpg'
import {NavLink} from "react-router-dom";

const User = ({user, followInProgress, unFollow, follow}) => {
    return <div className={classes.user}>
        <div className={classes.follow}>
            <div className={classes.imgItem}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={classes.img}/>
                </NavLink>
            </div>
            {user.followed
                ? <button disabled={followInProgress.some(id => id === user.id)}
                          onClick={() => {unFollow(user.id)}}
                          className={classes.btn}>UnFollow</button>
                : <button disabled={followInProgress.some(id => id === user.id)}
                          onClick={() => {follow(user.id)}}
                          className={classes.btn}>Follow</button>
            }
        </div>
        <div className={classes.discription}>
            <div className={classes.info}>
                <div className={classes.name}>{user.name}</div>
                <div>{user.status}</div>
            </div>
            <div>
                <div>{"user.location.city"}</div>
                <div>{"user.location.country"}</div>
            </div>
        </div>
    </div>
}
export default User