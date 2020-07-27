import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";




let store = {
    _callSubscriber() {
        console.log('state update');
    },
    _State: {
        profilePage: {
            posts: [
                {id: 1, message: 'Folen start the war', ailCount: 15},
                {id: 2, message: 'Hay what is war', ailCount: 20},
                {id: 3, message: 'Hay what is war', ailCount: 20},
                {id: 4, message: 'Hay what is war', ailCount: 20}
            ],
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Folen'},
                {id: 2, name: 'Ray'},
                {id: 3, name: 'Genry'},
                {id: 4, name: 'Neth'}
            ],
            messages: [
                {id: 1, text: 'Fuck you folen'},
                {id: 2, text: 'Nice folen'},
                {id: 3, text: 'Hate folen'},
                {id: 4, text: 'Love folen'}
            ]
        },
        sidebar: {}
    },
    getState() {
        return this._State
    },
    dispatch(action) {
        this._State.profilePage = profileReducer(this._State.profilePage, action)
        this._State.dialogsPage = dialogsReducer(this._State.dialogsPage, action)
        this._State.sidebar = sidebarReducer(this._State.sidebar, action)

        this._callSubscriber(this._State)
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}





window.store = store