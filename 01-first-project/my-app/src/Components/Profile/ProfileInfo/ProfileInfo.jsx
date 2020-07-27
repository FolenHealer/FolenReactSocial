import React, {useState} from "react";
import classes from './ProfileInfo.module.css'
import Loader from "../../common/loader/loader";
import userPhoto from "../../../assets/images/user.jpg"
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto,saveProfile}) => {

    let [editMode, setEditMode] = useState(false) /*HOOKS FOR EDIT MODE FORM PROFILE*/
    if (!profile) {return <Loader/>} /*IF NO PROFILE DISPLAY LOADER*/
    const onMainPhotoSelected = (e) => { /*ON CHANGE PHOTO*/
        if (e.target.files.length) { /*IF YES PHOTO IN ARRAY FILES*/
            savePhoto(e.target.files[0]) /*SET NEW PHOTO IN PROFILE*/
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData)
        setEditMode(false)
    }
    return (
        <div>
            <div className={classes.user}>
                <div className={classes.userItem}>
                    <img src={profile.photos.large != null ? profile.photos.large : userPhoto}
                         className={classes.avatar}/>
                    {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                </div>
                {editMode
                    ? <ProfileDataForm
                        profile={profile}
                        initialValues={profile}
                        onSubmit={onSubmit}
                    />
                    : <ProfileData profile={profile}
                                   isOwner={isOwner}
                                   goToEditMode={() =>{setEditMode(true)}}/>
                }
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    );
}


const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <>
        <div className={classes.userItem}>
            <div className={classes.statusTitleContainer}>
                <div className={classes.fullName}>{profile.fullName}</div>
                <div>About me: {profile.aboutMe}</div>
                <div>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</div>
                {profile.lookingForAJob && <div>Description: {profile.lookingForAJobDescription}</div>}
            </div>
        </div>
        <div className={classes.contactsContainer}>
            <h2 className={classes.contactsTitle}>CONTACTS</h2>
            <div className={classes.contacts}>
                {Object.keys(profile.contacts).map(key => {
                    return <Contacts
                        key={key}
                        contactTitle={key}
                        contactValue={profile.contacts[key]}/>
                })}
            </div>
        </div>
        {isOwner &&  <div><button onClick={goToEditMode}>EDIT MODE</button></div>}
    </>
}

const Contacts = ({contactTitle, contactValue}) => {
    return <div className={classes.contactItem}>
        <div>{contactTitle} : {contactValue}</div>
    </div>
}

export default ProfileInfo;



