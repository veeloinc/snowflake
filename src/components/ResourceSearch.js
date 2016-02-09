'use strict';
/**
 * ## Import
 *
 * React
 */
const React = require('react-native');
const {
    Component,
    } = React;

/**
 *  The fantastic little form library
 */
const t = require('tcomb-form-native');
let Form = t.form.Form;

class ResourceSearch extends Component {
    constructor(props) {
        super(props);
        this.state = this.context.store.getState().resourceSearch;
    }

    render() {
        let options = {
            auto: 'placeholders',
            fields: {
                search: {
                    label: 'Search',
                    maxLength: 32,
                    // editable: !this.props.foo,
                    hasError: this.state.form.fields.searchHasError,
                    error: 'Must be numbers'
                }
            }
        };

        let searchForm = t.struct({
            search: t.String
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
