import { expect } from 'chai';
import Component from '../src/modules/framework/component';
import templates from '../mocks/templates';
// import elements from '../mocks/elements';
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { document } = (new JSDOM()).window;
const createComponent = data => new Component(data);
describe('testing methods of component', () => {
    describe('test method render', () => {
        it('test data interpolation', () => {
            for (let template of templates){
                const component = createComponent({text: "testText"});
                component.template = template;
                component.render();
                console.log(component.$el)
                expect(component.$el.innerHTML.includes("testText")).to.be.true;
            }
        })
        })
});
export default {}
