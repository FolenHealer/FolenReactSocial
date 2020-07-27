import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unFollow
} from "../../Redux/users-reducer";
import Users from "./Users";
import Loader from "../common/loader/loader";

import {compose} from "redux";
import {
    getCurrentPageSelector,
    getFollowInProgressSelector,
    getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSuper
} from "../../Redux/users-selectors";

class usersContainer extends React.Component {
    componentDidMount() {
        const {currentPage,pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Loader/> : null}
            < Users totalItemsCount={this.props.totalItemsCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    unFollow={this.props.unFollow}
                    follow={this.props.follow}
                    followInProgress={this.props.followInProgress}
            />
        </>
    } /*RENDER*/
} /* USERSCONTAINER*/

let mapStateToProps = (state) => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSizeSelector(state),
        totalItemsCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followInProgress: getFollowInProgressSelector(state)
    }
}

export default compose(
    connect(mapStateToProps,
        {
            follow,
            unFollow,
            setCurrentPage,
            toggleFollowingProgress,
            getUsers
        }
    )
    //WithAuthRedirect
)(usersContainer)


/*ARCHIVE OF USERS CONTAINER******************************************************/

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}*/
/*this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })*/
/*this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })*/
/*export default connect(mapStateToProps,
    {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleFollowingProgress,
        getUsers: getUsersThunkCreator
    })(usersContainer)*/
