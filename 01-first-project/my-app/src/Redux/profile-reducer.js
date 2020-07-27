import {profileAPI, usersAPI} from "../API/API";
import {stopSubmit} from "redux-form";


const ADD_POST = 'folen_heal/profile/ADD-POST';
const SET_USER_PROFILE = 'folen_heal/profile/SET_USER_PROFILE';
const SET_STATUS = 'folen_heal/profile/SET_STATUS';
const DELETE_POST = 'folen_heal/profile/DELETE_POST';
const SET_PHOTO_SUCCESS = 'folen_heal/profile/SET_PHOTO_SUCCESS';

/*INITIAL STATE************************************************************************************************/

let initialState = {
    posts: [
        {id: 1, message: 'Folen start the war', ailCount: 15},
        {id: 2, message: 'Hay what is war', ailCount: 20},
        {id: 3, message: 'Hay what is war', ailCount: 20},
        {id: 4, message: 'Hay what is war', ailCount: 20}
    ],
    profile: null,
    status: "",
    isFetching: false
}

/****************************************************************************************************************/

/*REDUCER PROFILE*************************************************************************************************/

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, message: action.newPostBody, ailCount: 0}
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        case SET_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state
    }
}

/*****************************************************************************************************************/

/*ACTION CREATORS ***********************************************************************************************/

export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SET_PHOTO_SUCCESS, photos})

/*****************************************************************************************************************/

/*THUNKS(THUNK_CREATOR => THUNK)*********************************************************************************/

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))

}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (photos) => async (dispatch) => {
    let response = await profileAPI.savePhoto(photos)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {dispatch(getUserProfile(userId))}
    else{dispatch(stopSubmit)}
}

/*******************************************************************************************************************/

export default profileReducer