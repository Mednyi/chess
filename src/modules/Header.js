'use strict';
import Component from "./framework/component.js";
export default class Header extends Component {
    constructor() {
        super(undefined, './assets/css/header.css');
    }
    template() {
        return `
        <header>
            <div>&#9819; Amazing Checkmates</div>
            <div id="burger" tabindex="1">
                <div class="burger"></div>
                <div class="burger2"></div>
                <div class="burger3"></div>
            </div>
            <aside>
                <div>
                    Menu ITem1
                </div>
                <div>
                    Menu ITem2
                </div>
                <div>
                    Menu ITem3
                </div>
                <div>
                    Menu ITem4
                </div>
            </aside>
        </header>
        `
    }
}
