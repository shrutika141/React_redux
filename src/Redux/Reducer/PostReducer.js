const initialState = [ ];

function PostReducer(state = initialState, action ) {
    switch (action.type) {
        case "POST_DATA":
            state = [
                action.payload,
                ...state
            ]
            return state;
        default:
           return state;
    }
}


export default PostReducer