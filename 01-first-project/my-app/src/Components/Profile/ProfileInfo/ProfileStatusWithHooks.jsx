import React, {useEffect, useState} from "react";
import classes from './ProfileInfo.module.css'

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    useEffect(() =>{
        setStatus(props.status)
    }, [props.status])
    
    return <>
        <div className={classes.statusContainer}>
            <div className={classes.status}>
                {!editMode &&
                <div className={classes.nowStatusContainer}>
                        <span
                            onDoubleClick={activateEditMode}
                            className={classes.nowStatus}>
                            {props.status || 'fuck you'}
                        </span>
                </div>
                }
                {editMode &&
                <div className={classes.editStatus}>
                    <input
                        onBlur={deactivateEditMode}
                        autoFocus={true}
                        onChange={onStatusChange}
                        value={status}/>
                </div>
                }
            </div>
        </div>
    </>
}

export default ProfileStatusWithHooks