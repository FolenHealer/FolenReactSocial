import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validator";

const maxLength100 = maxLengthCreator(10)
const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <Dialog name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message text={m.text} key={m.id} id={m.id}/>)

    let addNewMessage = (values) => {
        props.postMessage(values.newMessageBody)
    }
    if(!props.isAuth) return <Redirect to={'/login'} />
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog__items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.post__message}>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <Field
                    name={'newMessageBody'}
                    component={TextArea}
                    validate={[required, maxLength100 ]}
                    className={classes.textarea}
                    placeholder='Введи сообщение'/>
                <button className={classes.btn}>
                    Добавить сообщение
                </button>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)
export default Dialogs;