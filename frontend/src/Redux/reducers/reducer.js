const initialState = {
    schools : [],
    school: [], 
    reviews: [],
    review: []
}


function reducer(state = initialState, action) {
    switch (action.type) {
        case "LOAD_SCHOOLS":
            return {...state, schools: [...state.schools, action.payload]}

        case "LOAD_SCHOOL":
            return {...state, school: [...state.school, action.payload.school], reviews: [...state.reviews, action.payload.reviews] }

        case "CREATE_REVIEW": 
            return {...state, review: [...state.review, action.payload]}    
        
        default:
            return state
    }
}



export default reducer




