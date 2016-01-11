import { SET_VISIBILITY_FILTER } from '../actions/FilterActions';


export default (state : string = "SHOW_ALL", action) => {
    switch (action.type){
        case SET_VISIBILITY_FILTER: {
            return action.filter;
        }
        default:
            return state;
    }
}