"use strict";

/*
 * ## Imports
 *  
 * Imports from redux
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * Immutable Map
 */
import {Map} from 'immutable';

/**
 * Project imports
 */
import ResourceCatalog from '../components/ResourceCatalog';
import ResourceSearch from '../components/ResourceSearch';

/**
 * Project actions
 */
import * as deviceActions from '../reducers/device/deviceActions';
import * as globalActions from '../reducers/global/globalActions';

import React,
{
    Component,
    StyleSheet,
    View
}
    from 'react-native';

const {
    SEARCH_NOW,
    SEARCH_VALUE_UPDATE
} = require('../lib/constants').default;

/**
 * ## Actions
 * 3 of our actions will be available as ```actions```
 */
const actions = [
    deviceActions,
    globalActions
];

import ErrorAlert from '../components/ErrorAlert';

/**
 *  Save all state as props (MC: ?!)
 */
function mapStateToProps(state) {
    return {
        ...state
    };
}

/*
 * Bind all the functions from the ```actions``` and bind them with
 * ```dispatch```

 */
function mapDispatchToProps(dispatch) {

    const creators = Map()
        .merge(...actions)
        .filter(value => typeof value === 'function')
        .toObject();

    return {
        actions: bindActionCreators(creators, dispatch),
        onSearchChange: (formValues) => {
            dispatch({type: SEARCH_VALUE_UPDATE, payload: {field: "search", value: formValues.search}})
        },
        onSearch: () => {
            dispatch({type: SEARCH_NOW});
        },
        dispatch
    };
}

/**
 * ## App class
 */
class App extends Component {
    render() {
        let content = [
            {name: 'party', value: 'yes'},
            {name: 'marty', value: 'sorta'},
            {name: 'farty', value: 'what'}
        ];
        return (
            <View>
                <ResourceSearch
                    value={this.props.resourceSearch.form.fields}
                    onChange={this.props.onSearchChange}
                    onButtonPress={this.props.onSearch}
                    formOptions={this.props.resourceSearch.form}/>
                <ResourceCatalog content={content}
                                 filter={this.props.resourceSearch.currentSearchFilterOnResources}/>
            </View>
        );
    }
}

/**
 * Connect the properties
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);
