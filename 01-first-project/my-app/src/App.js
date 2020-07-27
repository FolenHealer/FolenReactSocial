import loadable from '@loadable/component'

import React, {Suspense} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Route, Switch} from "react-router-dom";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import Loader from "./Components/common/loader/loader";

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'))

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Loader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper__content'>
                    <Suspense fallback={<Loader/>}>
                        <Switch>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                        </Switch>
                    </Suspense>
                </div>
            </div>
        );
    }
}

export default App

