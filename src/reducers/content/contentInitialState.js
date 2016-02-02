'use strict';
import {Record} from 'immutable';

var InitialState = Record({
    calculated_on: null,
    collections: [],
    files: [],
    help_paks: [],
    paks: []
});
export default InitialState;
