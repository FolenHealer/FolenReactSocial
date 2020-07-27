import React from 'react';
import './App.css';
import {BrowserRouter, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./Redux/app-reducer";
import store from "./Redux/redux-store";
import App from "./App";

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

const FolenApp = (props) => {
    return <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
}

export default FolenApp