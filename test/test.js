import { expect } from 'chai'
import Auth from '../src/modules/Auth'
import mockEmails from '../mocks/emails'
import mockEmailsBad from '../mocks/erroremails'
import mockPasswords from '../mocks/passwords'
import mockPasswordsBad from '../mocks/errorpasswords'
const createComponent = data => new Auth(data);
describe('Auth component testing', () => {
    describe('test input verification', () => {
        it ('test component constructor', () => {
            const component = createComponent();
            expect(component).to.be.a('object');
        })
        it('test good email input verification', () => {
            const component = createComponent();
            for(let email of mockEmails) {
                component.render = () => true;
                component.$el = {children: [0, {children: [{value: email}]}]};
                component.methods.verifyEmail();
                console.log(email);
                expect(component.data.mailErr).to.equal(false)
            }
        })
        it('test bad email input verification', () => {
            const component = createComponent();
            for(let email of mockEmailsBad) {
                component.render = () => true;
                component.$el = {children: [0, {children: [{value: email}]}]};
                component.methods.verifyEmail();
                console.log(email);
                expect(component.data.mailErr).to.equal(true)
            }
        })
        it('test good password input verification', () => {
            const component = createComponent();
            for(let password of mockPasswords) {
                component.render = () => true;
                component.$el = {children: [0, {children: [{value: password}]}]};
                component.methods.verifyPass();
                console.log(password);
                expect(component.data.passErr).to.equal(false)
            }
        })
        it('test bad password input verification', () => {
            const component = createComponent();
            for(let password of mockPasswordsBad) {
                component.render = () => true;
                component.$el = {children: [0, {children: [{value: password}]}]};
                component.methods.verifyPass();
                console.log(password);
                expect(component.data.passErr).to.equal(true)
            }
        })
    })
});
export default {}





