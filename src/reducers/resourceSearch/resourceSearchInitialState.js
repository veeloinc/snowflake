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
    form: new Form
});
export default InitialState;
