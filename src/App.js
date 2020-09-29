'use strict';
import Component from "./modules/framework/component.js";
import Header from "./modules/Header.js";
import Footer from "./modules/Footer.js";
import Landing from "./modules/Landing.js";
import Router from "./modules/framework/Router.js"
import Auth from "./modules/Auth.js";
const router = new Router(undefined, {
    landing: {
        path: '',
        component: Landing
    },
    auth: {
        path: 'auth',
        component: Auth
    }
});
Component.use({$router: router});
export default class App extends Component {
    onRender() {
        this.$el.append(this.components.header.render());
        this.$el.append(router.$el);
        this.$el.append(this.components.footer.render());
    }
    components = {
        header: new Header(),
        footer: new Footer()
    }
}
