'use strict';

import InitialState from './resourceSearchInitialState';

const initialState = new InitialState;
const {
    SEARCH_NOW,
    SEARCH_VALUE_UPDATE
} = require('../../lib/constants').default;

export default function resourceSearchReducer(state = initialState, action) {
    if (!(state instanceof InitialState)) {
        return initialState.merge(state);
    }
    switch(action.type) {
        case SEARCH_NOW:
            console.log('search now');
            break;
        case SEARCH_VALUE_UPDATE:
            console.log('search value update', action);
            break;
        default:
            console.log('unhandled action');
    }

    return state;
}
