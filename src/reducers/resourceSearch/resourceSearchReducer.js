'use strict';

import InitialState from './resourceSearchInitialState';


/**
 * ## Imports
 *
 * fieldValidation for validating the fields
 * formValidation for setting the form's valid flag
 */
const fieldValidation = require('../../lib/fieldValidation').default;

/**
 * ## formValidation
 * @param {Object} state - the Redux state object
 *
 * As there is only one field, the form is valid if it is
 */
function formValidation (state) {
    if (state.form.fields.search != ''
        &&
        !state.form.fields.searchHasError
    ) {
        return state.setIn(['form','isValid'], true);
    } else {
        return state.setIn(['form','isValid'], false);
    }
}




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
            return state.setIn(["currentSearchFilterOnResources"], state.form.fields.search);

        case SEARCH_VALUE_UPDATE:

            let nextFormState = state.setIn(
                ['form', 'fields', 'search'],
                action.payload.value)
                    .setIn(['form','error'],null);

            let returnState = formValidation(
              fieldValidation(nextFormState, action), action);

            console.log("return state", returnState.form.fields.searchHasError);

            return returnState;
        default:
            return state;
    }
}
