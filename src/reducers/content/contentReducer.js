"use strict";

const {
    LOAD_CONTENT
    } = require('../../lib/constants').default;

import InitialState from './contentInitialState';
const initialState = new InitialState;
export default function contentReducer(state=initialState, action) {
    if (!(state instanceof InitialState)) return initialState.merge(state);

    switch (action.type) {
        case LOAD_CONTENT:
            return state.set('calculated_on', action.payload.calculated_on)
                .set('collections', action.payload.collections)
                .set('files', action.payload.files)
                .set('help_paks', action.payload.help_paks)
                .set('paks', action.payload.paks);
    }
};
