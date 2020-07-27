import React from "react";
import classes from './FormsControl.module.css'
import {required} from "../../../utils/validators/validator";
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : '')}>
            {hasError && <span>{error}</span>}
            <div>
                {children}
            </div>
        </div>
    )
}


export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props
    return (
    <FormControl {...props}>
        <textarea {...input} {...restProps}/>
    </FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return (
    <FormControl {...props}>
        <input {...input} {...restProps}/>
    </FormControl>
    )
}

export const createField = (placeholder, name, validators, component, props) => (
    <Field
        validate={validators}
        placeholder={placeholder}
        name={name}
        component={component}
        {...props}/>)
