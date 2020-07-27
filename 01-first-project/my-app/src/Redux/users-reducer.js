import {usersAPI} from "../API/API";
import {updateObjInArr} from "../utils/helpers/obj-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followInProgress: []
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjInArr(state.users,action.userId,"id", {followed: true})
               /* users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })*/
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjInArr(state.users,action.userId,"id", {followed: false})
                /*users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })*/
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followInProgress: action.isFetching
                    ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}
/*ACTIONS***********************************************************************************************************/

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

/***************************************************************************************************************/

/*FOLLOW_UNFOLLOW_METHOD**************************************************************************************/

const followUnFollowFlow = async (dispatch, userId, apiMethod, actionCreator) =>{
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode == 0) {dispatch(actionCreator(userId))}
    dispatch(toggleFollowingProgress(false, userId))
}

/**************************************************************************************************************/

/*THUNKS****************************************************************************************************/

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))

    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

export const follow = (userId) => async (dispatch) => {
    followUnFollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}
export const unFollow = (userId) => async (dispatch) => {
    followUnFollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), unFollowSuccess)
}

/****************************************************************************************************************/

export default usersReducer