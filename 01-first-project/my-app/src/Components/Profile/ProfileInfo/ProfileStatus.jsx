import React from "react";
import classes from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps,prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return <>
            <div className={classes.statusContainer}>
                <div className={classes.status}>
                    {!this.state.editMode &&
                    <div className={classes.nowStatusContainer}>
                        <span
                            onDoubleClick={this.activateEditMode}
                            className={classes.nowStatus}>
                            {this.props.status || 'fuck you'}
                        </span>
                    </div>
                    }
                    {this.state.editMode &&
                    <div className={classes.editStatus}>
                        <input
                            autoFocus={true}
                            onBlur={this.deactivateEditMode}
                            onChange={this.onStatusChange}
                            value={this.state.status}/>
                    </div>
                    }
                </div>
            </div>
        </>
    }
}

export default ProfileStatus