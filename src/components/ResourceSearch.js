'use strict';
/**
 * ## Import
 *
 * React
 */
const React = require('react-native');
const {
    Component,
    PropTypes
} = React;

import resourceSearchInitialState from '../reducers/resourceSearch/resourceSearchInitialState';

/**
 *  The fantastic little form library
 */
const t = require('tcomb-form-native');
let Form = t.form.Form;

class ResourceSearch extends Component {
    static get defaultProps() {
        var props = new resourceSearchInitialState;
        return {formOptions: props.form};
    }

    static get propTypes() {
        return {
            value: PropTypes.string,
            onChange: PropTypes.func,
            formOptions: PropTypes.object
        };
    }

    render() {
        let options = {
            auto: 'placeholders',
            fields: {
                search: {
                    label: 'Search',
                    maxLength: 32,
                    // editable: !this.props.foo,
                    hasError: this.props.formOptions.fields.searchHasError,
                    error: 'Must be numbers'
                }
            }
        };

        let searchForm = t.struct({
            search: t.Number
        });


        return (
            <Form
                ref="form"
                type={searchForm}
                options={options}
                value={this.props.value}
                onChange={this.props.onChange}
            />
        );

    }
}

module.exports = ResourceSearch;
