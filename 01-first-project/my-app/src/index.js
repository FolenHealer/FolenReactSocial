import * as serviceWorker from "./serviceWorker";
import ReactDOM from "react-dom";
import React from "react";
import FolenApp from "./AppContainer";


ReactDOM.render(
    <FolenApp/>,
    document.getElementById('root')
)


serviceWorker.unregister();