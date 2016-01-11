export const SET_VISIBILITY_FILTER : string = 'SET_VISIBILITY_FILTER';

export var setVisibilityFilter = (filter: string) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}