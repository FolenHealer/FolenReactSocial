import React from "react";
import classes from './Users.module.css'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, onPageChanged, totalItemsCount, pageSize, users, ...props}) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div className={classes.users}>
        <Paginator
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalItemsCount={totalItemsCount}
            pageSize={pageSize}/>
        {users.map(u => <User
            followInProgress={props.followInProgress}
            unFollow={props.unFollow}
            follow={props.follow}
            user={u}
            key={u.id}/>)}
    </div>
}
export default Users