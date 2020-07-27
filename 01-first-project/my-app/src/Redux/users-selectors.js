import {createSelector} from 'reselect';
/*SELECTORS**********************************************************************************************************/
const getUsersSelector = (state) => {
    return state.usersPage.users
}
export const getUsersSuper = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})
export const getPageSizeSelector = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetchingSelector = (state) => {
    return state.usersPage.isFetching
}
export const getFollowInProgressSelector = (state) => {
    return state.usersPage.followInProgress
}
/********************************************************************************************************************/

