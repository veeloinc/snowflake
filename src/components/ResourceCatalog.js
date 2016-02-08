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

class ResourceCatalog extends Component {
  render() {
    return <Text>Hello world from the catalog</Text>;
  }
}

module.exports = ResourceCatalog;
