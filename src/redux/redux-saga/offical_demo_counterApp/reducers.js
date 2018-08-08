export default function (state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'INCREMENT_ASYNC':
            return state;
        case 'ONDECREMENT_ASYNC':
            return state;
        case 'ONRESET':
            return action.text;
        default:
            return state;
    }
}
