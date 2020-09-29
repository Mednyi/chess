'use strict';
export default class Component {
    constructor(data = {}, $css = undefined, $el = undefined) {
        this.data = data;
        this.$el = $el;
        this.$css = $css;
        this.methods = this.methods();
        Object.keys(this.methods).forEach(methodName => {
            this.methods[methodName]  = this.methods[methodName].bind(this);
        })
    }
    static use (plugin) {
        const [key, value] = Object.entries(plugin)[0];
        this.prototype[key] = value
    }
    methods () {return {}}
    template () {return `<div></div>`}
    destroy () {
        const oldCSS = document.querySelector(`link[href="${this.$css}"]`);
        if(oldCSS) oldCSS.remove();
        if(this.$el) this.$el.remove();
        delete this;
    }
    onRender () {}
    render () {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = this.template(); // <div><body>.....</body></div>
        if (this.$el) {
            this.$el.innerHTML = wrapper.firstElementChild.innerHTML; // <body>...</body>
        } else {
            this.$el = wrapper.firstElementChild;
        }
        if (this.$css) {
            const oldLink = document.querySelector(`link[href="${this.$css}"]`);
            if (oldLink) oldLink.remove();
            const link = document.createElement('link');
            link.href = this.$css;
            link.rel = 'stylesheet';
            document.getElementsByTagName('head')[0].append(link);
        }
        this.onRender();
        return this.$el;
    }
}
