'use strict';
/**
 * ## Import
 *
 * React
 */
const React = require('react-native');
const {
    View,
    PropTypes
} = React;

/**
 * The platform neutral button
 */
const Button = require('apsl-react-native-button');

import resourceSearchInitialState from '../reducers/resourceSearch/resourceSearchInitialState';

/**
 *  The fantastic little form library
 */
const t = require('tcomb-form-native');
let Form = t.form.Form;

const ResourceSearch = ({value, onChange, onButtonPress, formOptions}) => {
    let options = {
        auto: 'placeholders',
        fields: {
            search: {
                label: 'Search',
                maxLength: 32,
                hasError: formOptions.fields.searchHasError,
                error: 'Must be numbers'
            }
        }
    };

    let searchForm = t.struct({
        search: t.Number
    });

    return (
        <View>
            <Form type={searchForm}
                  options={options}
                  value={value}
                  onChange={onChange}/>
            <Button isDisabled={!formOptions.isValid}
                    onPress={onButtonPress}
            >Search</Button>
        </View>
    );
};

ResourceSearch.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onButtonPress: PropTypes.func.isRequired,
    formOptions: PropTypes.object.isRequired
};

export default ResourceSearch;