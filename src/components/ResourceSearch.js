'use strict';
/**
 * ## Import
 *
 * React
 */
const React = require('react-native');
const {
    View,
    Component,
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

export default class ResourceSearch extends Component {
    static get defaultProps() {
        return {
            formOptions: (new resourceSearchInitialState).form
        };
    }

    static get propTypes() {
        return {
            value: PropTypes.string,
            onChange: PropTypes.func,
            formOptions: PropTypes.object
        };
    }

    onChange() {

    }

    onButtonPress() {

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
        var self = this;

        return (
            <View>
                <Form
                    ref="form"
                    type={searchForm}
                    options={options}
                    value={this.props.value}
                    onChange={this.onChange.bind(self)}
                />
                <Button buttonText="Search"
                        isDisabled={!this.props.formOptions.isValid}
                        onPress={this.onButtonPress.bind(self)}/>

            </View>
        );

    }
}
