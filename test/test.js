import { expect } from 'chai'
import Auth from '../src/modules/Auth'
import mockEmails from '../mocks/emails'
const createComponent = data => new Auth(data);
describe('Auth component testing', () => {
    describe('test input verification', () => {
        it ('test component constructor', () => {
            const component = createComponent();
            expect(component).to.be.a('object');
        })
        it('test email input verification', () => {
            const component = createComponent();
            component.render();
            for(let email in mockEmails) {
                component.data.email = email;
                component.methods.verifyEmail();
                console.log(JSON.stringify(component));
                expect(component.data.mailErr).to.equal(false)
            }
        })
    })
});
export default {}





