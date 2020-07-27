import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {TextArea} from "../../common/FormsControl/FormsControl";

const maxLength10 = maxLengthCreator(10)

const  MyPosts = (props) =>{

    console.log('renderMP')
    let postsElements = [...props.posts]
        .reverse()
        .map(p => <Post message={p.message} key={p.id} ailCount={p.ailCount}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostBody)
    }
    return (
        <div className={classes.container}>
            <h3 className={classes.title}>My posts</h3>
            <div className={classes.flexBox}>
                <AddNewPostForm onSubmit={onAddPost}/>
            </div>
            <div className={classes.item}>{postsElements}</div>
        </div>
    );
}


function AddNewPostForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                validate={[required, maxLength10]}
                name={"newPostBody"}
                className={classes.textarea}
                component={TextArea}
                placeholder='Введи сообщение'/>
        </div>
        <div>
            <button className={classes.btn}>
                Add post
            </button>
        </div>
    </form>;
}

AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)


export default MyPosts;