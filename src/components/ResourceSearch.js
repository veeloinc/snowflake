'use strict';
/**
 * ## Import
 *
 * React
 */
const React = require('react-native');
const {
  Component,
  Text,
  View,
  PropTypes
} = React;

/**
 *  The fantastic little form library
 */
const t = require('tcomb-form-native');
let Form = t.form.Form;

class ResourceSearch extends Component {


  getInitialState() {
    return {
      form: Form
    }
  }

  render() {
    let options = {
      auto: 'placeholders',
      fields: {
        search: {
          label: 'Search',
          maxLength: 32,
          // editable: !this.props.form.isFetching,
          // hasError: this.state.form.fields.searchHasError,
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
