import {addMessageActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        postMessage: (newMessageBody) => {dispatch(addMessageActionCreator(newMessageBody))}
    }
}
export default compose(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs)
