import MyPosts from "../MyPosts";
import {addPostActionCreator} from "../../../../Redux/profile-reducer";
import {connect} from "react-redux";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
        newPostBody: state.profilePage.newPostBody
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        addPost:(newPostBody) => {dispatch(addPostActionCreator(newPostBody))},
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
