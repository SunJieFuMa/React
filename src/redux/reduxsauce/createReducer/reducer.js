import {createReducer} from 'reduxsauce'

const Types = {
    INCREASE: 'increase',
};

export const INITIAL_STATE = {count: 0};

const increase = (state, action) => {
    // success  2   increase
    console.log('success ' + state.count + " " + action.type);
    return {count: state.count + 1}
};

export const HANDLERS = {
    [Types.INCREASE]: increase,
};

export default createReducer(INITIAL_STATE, HANDLERS)



