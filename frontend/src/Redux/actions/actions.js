import { fetchSchools } from '../../services/api';
import { fetchSchool } from '../../services/api';

export function loadSchools() {
    return (dispatch) => {
        fetchSchools().then(resp => {
            dispatch({type:"LOAD_SCHOOLS", payload: resp.data})
        })
    }
}


export function loadSchool() {
    return (dispatch) => {
        fetchSchool(this.props.match.params.slug).then(resp => {
            dispatch({type:"LOAD_SCHOOL", payload: {school: resp.data, reviews: resp.included} })
        })
    }
}



