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
 *  Save that state
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
        dispatch
    };
}

/**
 * ## App class
 */
class App extends Component {
    render() {
        return (
            <View>
                <ResourceSearch/>
                <ResourceCatalog/>
            </View>
        );
    }
}

/**
 * Connect the properties
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);
