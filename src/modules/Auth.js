'use strict';
import Component from './framework/component.js';
export default class Auth extends Component {
    constructor() {
        super({}, './assets/css/auth.css');
        this.data.password = '';
        this.data.email='';
        this.data.mailErr = undefined;
        this.data.passErr = undefined;
    }
    template() {
        return `
        <main>
            <h3> &#9819; Amazing Checkmates </h3>
           <article class="article">
              <input type="text" class="${this.data.mailErr !== undefined ? (this.data.mailErr ? 'text_input error' : 'text_input success') : 'text_input'}" value="${this.data.email}" placeholder="E-mail" >
              <input id="pass" type="password" class="${this.data.passErr !== undefined ? (this.data.passErr ? 'text_input error' : 'text_input success') : 'text_input'}" value="${this.data.password}" placeholder="Password">
           </article>
           <article class="article1">
               <input class="button" type="submit" value="Login">
               <input class="button underline" type="submit" value="Register">
           </article>
       </main>
        `
    }
    methods() {
        return {
            verifyEmail () {
                const emailInput = this.$el.children[1].children[0];
                this.data.email = emailInput.value;
                const mailRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                this.data.mailErr = !mailRegEx.test(this.data.email);
                this.render();
            },
            verifyPass () {
                const passwordInput = this.$el.children[1].querySelector('#pass');
                const passRegEx = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
                this.data.password = passwordInput.value;
                this.data.passErr = !passRegEx.test(this.data.password);
                this.render();
            }
        }
    }
    onRender() {
        const emailInput = this.$el.children[1].children[0];
        emailInput.onblur = this.methods.verifyEmail;
        const passwordInput = this.$el.children[1].children[1];
        passwordInput.onblur = this.methods.verifyPass;
    }
}
