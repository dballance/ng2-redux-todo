export const ADD_TODO : string = 'ADD_TODO';
export const TOGGLE_TODO : string = 'TOGGLE_TODO';

export var addTodo = (text: string | number) => {
    return {
        type: ADD_TODO,
        text
    }
}

export var toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    }
}