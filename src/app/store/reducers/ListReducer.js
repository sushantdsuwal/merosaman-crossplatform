import {
    TOGGLE_LIST,
    TOGGLE_SELECTION
} from '../actions/actionTypes';

const initialState = {
    open: false,
    activeId: 0,
    ListBox: []
};
export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LIST: {
            return {
                ...state,
                open: action.payload.open,
                activeId: action.payload.activeId
            }
        };
        case TOGGLE_SELECTION: {
            return {
                ...state,
                ListBox: state.ListBox.filter(item => item.Id == action.payload.Id && item.ProductId == action.payload.ProductId).length > 0 ?
                    state.ListBox.filter(item => (item.Id !== action.payload.Id) || (item.ProductId !== action.payload.ProductId))
                    :
                    [...state.ListBox, {
                        Id: action.payload.Id,
                        ProductId: action.payload.ProductId
                    }]
            }
        };
        default: {
            return state;
        };
    }
}


