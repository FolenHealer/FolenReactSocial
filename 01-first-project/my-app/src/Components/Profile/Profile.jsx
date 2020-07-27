import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                isFetching={props.isFetching}
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status} u
                pdateStatus={props.updateStatus}
                saveProfile={props.saveProfile}/>
            <MyPostsContainer/>
        </div>
    );
}
export default Profile;