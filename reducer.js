const INITIAL_STATE = {

    namee: {}

}

export default (state = INITIAL_STATE, action) => {

    if (action.type == "DATAFROMDATABASE") {
        state.namee = action.payload
        return { ...state, namee: action.payload }
    }

    return state

}