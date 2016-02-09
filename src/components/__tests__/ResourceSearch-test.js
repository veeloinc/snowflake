'use strict';
/* globals jest,expect,it,describe */
jest.autoMockOff();

var React = require('react-native');

var utils = require('react-addons-test-utils');

/**
 * ## Under test
 * class under test
 */
jest.dontMock('../ResourceSearch');
var ResourceSearch = require('../ResourceSearch');


/**
 * Included here, after dontMock so it's in all it's glory
 */
var t = require('tcomb-form-native');
let Form = t.form.Form;


/**
 * ## Test
 */
describe('ResourceSearch', () => {
    function renderResourceSearch(props) {
        const renderer = utils.createRenderer();
        renderer.render(<ResourceSearch {...props}/>);
        const output = renderer.getRenderOutput();

        return {
            props,
            output,
            renderer
        };
    }

    it("Errors on non-numeric input", () => {
        let form = {
            fields: {
                searchHasError: false
            }
        };

        let value = {
            search: 'not a number'
        };

        let props = {
            form: form,
            value: value
        };

        let {output} = renderResourceSearch(props);
        expect(output.type).toEqual(Form);

        expect(output.options.fields.search.hasError).toBeTruthy();
    });
});
