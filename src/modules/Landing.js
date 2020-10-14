'use strict';
import Component from "./framework/component.js";
export default class Landing extends Component {
    constructor($el) {
        super(null, './assets/css/landing.css', $el);
    }
    template() {
        return `
        <main>
            <article class ="article1">
                <h4> Amazing Checkmates </h4>
                <hr>
            </article>
            <article class = "article2">
                <p> Reveal your strategic skills </p>
                <p>In the game of kings</p>
                <img class="img" src="assets/images/chess1.png">
            </article>
            <input class="button" type="submit" value="Conquer">
            <img class="ladia" src="assets/images/ladia.png">
        </main>
        `
    }
    methods () {
        return {
            conquer () {
                this.$router.push('auth');
            }
        }
    }
    onRender() {
        const button = this.$el.getElementsByTagName('input')[0];
        button.onclick = this.methods.conquer;
    }
}
