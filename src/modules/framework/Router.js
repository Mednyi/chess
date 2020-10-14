'use strict';
export default class Router {
    constructor ($el,routes = {}, basePath) {
        $el ? (this.$el = $el) : (this.$el = document.createElement('div'));
        this.routes = routes;
        if (basePath) {
            this.basePath = basePath
        } else {
            const path = window.location.pathname.split('/');
            path.pop();
            this.basePath = path.join('/');
        }
        this.push = this.push.bind(this)
        window.addEventListener('hashchange', this.push)
        this.render();
    }
    push (routeName) {
        let newComponent
        let newPath
        if (typeof routeName === 'object') {
            const hash = window.location.hash
            let currentRoute
            if (!hash) {
                currentRoute = Object.values(this.routes).find(route => route.path === '');
            } else {
                const path = hash.split('/')[1];
                currentRoute = Object.values(this.routes).find(route => route.path === path)
            }
            newComponent = new currentRoute.component(this.$el);
        } else {
            newPath = `${this.basePath}/#/${this.routes[routeName].path}`;
            history.pushState(null, null, newPath); // history - browser (BOM) object for route management
            newComponent = new this.routes[routeName].component(this.$el);
        }
        this.component.destroy();
        newComponent.render();
        this.component = newComponent;
    }
    render () {
        const hash = window.location.hash;
        let currentRoute;
        if (!hash) {
            const newPath = `${this.basePath}/#/`;
            history.pushState(null, null, newPath);
            currentRoute = Object.values(this.routes).find(route => route.path === '');
        } else {
            const path = hash.split('/')[1];
            currentRoute = Object.values(this.routes).find(route => route.path === path)
        }
        this.component = new currentRoute.component();
        this.$el = this.component.render();
        return this.$el
    }
}
