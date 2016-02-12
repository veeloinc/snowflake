'use strict';
/**
 * ## Import
 */
const {Record} = require('immutable');

/**
 * ## Form
 * This Record contains the state of the form and the
 * fields it contains.
 */
const Form = Record({
    disabled: false,
    isValid: true,
    error: null,
    fields: new (Record({
        search: '',
        searchHasError: false
    }))
});

/**
 * ## InitialState
 * The form is set
 */
var InitialState = Record({
    currentSearchFilterOnResources: null,
    currentLinkIndex: 0,
    form: new Form
});
export default InitialState;
