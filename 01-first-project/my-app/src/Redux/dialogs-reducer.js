const ADD_MESSAGE = 'ADD-MESSAGE';

/*INITIAL STATE************************************************************************************************/

let initialState = {
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
}

/****************************************************************************************************************/

/*REDUCER DIALOGS*************************************************************************************************/
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id:6, text: newMessage}],
            }
        default:
            return state
    }
}
/*****************************************************************************************************************/

/*ACTION CREATOR*************************************************************************************************/

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})

/*****************************************************************************************************************/

export default dialogsReducer