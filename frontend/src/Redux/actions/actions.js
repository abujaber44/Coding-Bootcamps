import { fetchSchools } from '../../services/api';

export function loadSchools() {
    return (dispatch) => {
        fetchSchools().then(resp => {
            dispatch({type:"LOAD_SCHOOLS", payload: resp.data})
        })
    }
}