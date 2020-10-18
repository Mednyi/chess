import { expect } from 'chai';
import Component from '../src/modules/framework/component';
import templates from '../mocks/templates';
import elements from '../mocks/elements';
const createComponent = data => new Component($el);
describe('testing methods of component', () => {
    describe('test method render', () => {
        it('?', () => {
            for (let $el of elements){
            for (let template of templates){
                const component = createComponent();
                component.template = template;
                component.render.wrapper = `<div></div>`;
                component.render();
                console.log($el);
                expect().to.equal()
            }
        }
        })
        })
});
export default {}