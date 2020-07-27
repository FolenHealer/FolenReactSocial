import React from "react";
import classes from "./ProfileInfo.module.css";
import {createField, Input, TextArea} from "../../common/FormsControl/FormsControl";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile, handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <div className={classes.userItem}>
            <div className={classes.statusTitleContainer}>
                <div className={classes.fullName}>
                    {createField("Full NAME", "fullName", [], Input)}
                </div>
                <div>
                    About me:
                    {createField("Write about yourself", "aboutMe", [], TextArea)}
                </div>
                <div>
                    Looking for a job:
                    {createField("", "lookingForAJob", [], Input, {type: 'checkbox'})}
                </div>
                <div>
                    Description:
                    {createField("Description", "lookingForAJobDescription", [], TextArea)}
                </div>
            </div>
        </div>
        <div className={classes.contactsContainer}>
            <h2 className={classes.contactsTitle}>CONTACTS</h2>
            <div className={classes.contacts}>
                {Object.keys(profile.contacts).map(key => {
                    return <div className={classes.contactItem}>{key}:
                        {createField(key, "contacts." + key, [], Input)}
                    </div>
                })}
            </div>
        </div>
        <div>
            <button>SAVE</button>
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataReduxForm