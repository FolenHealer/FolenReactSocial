import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.ailsContainer}>
            <img src='https://placehold.it/50/1'></img>
                <div><span className={classes.ailsText}>AILS</span>{props.ailCount}</div>
            </div>
            <div className={classes.message}>{props.message}</div>
            <div>

            </div>
        </div>
    );
}
export default Post;