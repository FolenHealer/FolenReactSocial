import React from "react";
import loaderSvg from '../../../assets/images/pre-loader.svg'
import classes from './loader.module.css'
const Loader = (props) =>{
    return <div className={classes.loader}>
        <img src={loaderSvg} alt="#" />
    </div>
}
export default Loader;