'use strict';
/**
 * ## Import
 *
 * React
 */
const React = require('react-native');
const {
    View,
    PropTypes,
    Image,
    Text
} = React;

/**
 * The platform neutral button
 */
const Button = require('apsl-react-native-button');

/**
 *  The fantastic little form library
 */
const t = require('tcomb-form-native');
let Form = t.form.Form;

function constructOptionsForForm(formOptions) {
    return {
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
}

const ResourceSearch = ({value, onChange, onButtonPress, formOptions}) => {
    var options = constructOptionsForForm(formOptions);

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
            <Image
                source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
                onLoad={ () => { console.log("in onLoad"); } }
                onError={ () => { console.log("in onError"); } }
                onProgress={ () => { console.log("in onProgress"); } }
              />
            <Text>did you see the image?</Text>
        </View>
    );
};

ResourceSearch.propTypes = {
    value: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    onButtonPress: PropTypes.func.isRequired,
    formOptions: PropTypes.object.isRequired
};

export default ResourceSearch;
