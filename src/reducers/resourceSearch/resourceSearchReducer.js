'use strict';

/**
 * ## Imports
 *
 * fieldValidation for validating the fields
 * formValidation for setting the form's valid flag
 */
import {
    LinkingIOS
} from 'react-native';

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
        //case URL_DOWNLOAD_SUCCESS:
        //    state = state.set('currentLinkIndex', state.currentLinkIndex + 1);
        //    // fall through to SEARCH_NOW
        case SEARCH_NOW:
            //let url = links[state.currentLinkIndex];
            //fetch(url).then((resp) => {
            //    console.log('successful request', resp);
            //    dispatch({type: URL_DOWNLOAD_SUCCESS})
            //}).catch((err) => {
            //    console.log('failed request', err);
            //});
            //let url = 'https://www.google.com';
            //console.log('Linking is', LinkingIOS);
            //LinkingIOS.canOpenURL(url)
            //    .then(supported => {
            //        if (!supported) {
            //            console.log('Can\'t handle url: ' + url);
            //        } else {
            //            return LinkingIOS.openURL(url);
            //        }
            //    })
            //    .catch(err => console.error('An error occurred', err));

            //Linking.openURL(url).catch(err => console.error('An error occurred', err));
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
