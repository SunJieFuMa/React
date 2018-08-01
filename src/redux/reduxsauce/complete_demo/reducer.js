import {createActions, createReducer} from 'reduxsauce'

const {Types, Creators} = createActions({
    increase_click: ['text']
});

const INITIAL_STATE = {
    count: 0,
};

function increase(state, action) {
    return {
        count: state.count + 1,
        text: action.text
    };
}

const HANDLER = {
    [Types.INCREASE_CLICK]: increase
};
export const Actions = Creators;
export default createReducer(INITIAL_STATE, HANDLER);



