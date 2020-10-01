'use strict';
import Component from "./framework/component.js";
export default class Profile extends Component {
    constructor() {
        super(null, './assets/css/profile.css');
    }
    template() {
        return `
        <main>
        <section class="headSection">
            <img src="assets/images/alcoman.jpg">
            <div class="right">
                <h3>Alexander Sourman</h3>
                <div id="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <div id="info">
                    <div>Played games: 168</div>
                    <div>Won: 160</div>
                </div>
            </div>
        </section>
        <section class="buttons">
            <div class="button">New game</div>
            <div class="button">Load game</div>
            <div class="button">Settings</div>
        </section>
    </main>
        `
    }
    methods () {
        return {
        }
    }
    onRender() {
    }
}