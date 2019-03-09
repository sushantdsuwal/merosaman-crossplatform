import {
    TOGGLE_LIST,
    TOGGLE_SELECTION
} from './actionTypes';

// ToggleChapterList
export const toggleList = ({ open, activeId }) => {
    return (dispatch) => {
        dispatch({ type: TOGGLE_LIST, payload: { open, activeId } })
    }
}

export const toggleSelection = ({ Id, ProductId }) => {
    return (dispatch) => {
        dispatch({ type: TOGGLE_SELECTION, payload: { Id, ProductId } })
    }
}
