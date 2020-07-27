import React from "react";
import classes from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div className={classes.loginContainer}>
        <div className={classes.loginFormContainer}>
            <h1 className={classes.loginTitle}>
                LOGIN
            </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    </div>
}

const LoginForm = ({handleSubmit, error}) => {
    return <form
        onSubmit={handleSubmit}
        className={classes.loginForm}>
        <div className={classes.loginInputItem}>
            {createField('email', 'email', [required], Input)}
            {/*<Field
                validate={[required]}
                placeholder={'email'}
                name={'email'}
                component={Input}/>*/}
        </div>
        <div className={classes.loginInputItem}>
            {createField('password', 'password', [required], Input, {type: 'password'})}
            {/*<Field
                validate={[required]}
                placeholder={'password'}
                name={'password'}
                component={Input}
                type={'password'}/>*/}
        </div>
        <div className={classes.loginInputItem}>
            {createField(null, 'rememberMe', null, Input, {type: 'checkbox'})}
            {/*<Field
                validate={[required]}
                type={'checkbox'}
                name={'rememberMe'}
                component={Input}/>*/}
            Remember me
        </div>
        {error && <div className={classes.formSummaryError}>{error}</div>}
        <div className={classes.loginButtonItem}>
            <button className={classes.btn}>Login</button>
        </div>
    </form>
}

const mapStateToPropsLogin = (state) => ({
    isAuth: state.auth.isAuth
})

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
export default connect(mapStateToPropsLogin, {login})(Login)