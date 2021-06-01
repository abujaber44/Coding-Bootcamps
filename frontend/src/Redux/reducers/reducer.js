const initialState = {
    schools : []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "LOAD_SCHOOLS":
            return {...state, schools: [...state.schools, action.payload]}
        default:
            return state
    }
}

export default reducer


