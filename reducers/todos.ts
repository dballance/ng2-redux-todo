import { ADD_TODO, TOGGLE_TODO } from '../actions/TodosActions.ts';
import { ITodo } from "../components/Todo";

export default (state : ITodo[] = [], action) => {
    switch (action.type){
        case ADD_TODO: {
            return [
                ...state,
                {
                    id: state.reduce((max, todo) => Math.max(todo.id, max), -1) + 1,
                    completed: false, 
                    text: action.text
                }
            ]
        }
        case TOGGLE_TODO: {
            return state.map(todo => {
                if (todo.id !== action.id){
                    return todo;
                }
                return Object.assign(todo, {completed: !todo.completed});
            });
        }
        default:
            return state;
    }
}