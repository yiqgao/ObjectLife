import { createReactive } from "./reactive";
class Visual {
    state: any;
    props: any;
    private doms: any;
    private virtualDoms: any;
    render() {}
    beforeMount() {}
    monuted() {
        console.log("mount success");
    }
    constructor(state: any, props: any) {
        this._init(state, props);
    }
    private _init(state: any, props: any) {
        this.state = createReactive(state);
        this.props = createReactive(props);
    }
    mount(dom: HTMLElement) {
        this.doms = document.createElement("div");
        this.beforeMount();
        this._render();
        this._patch();
        dom.appendChild(this.doms);
        this.monuted();
    }
    private _render() {
        this.virtualDoms = this.render();
    }
    private _patch() {
        this.doms = patch(this.virtualDoms);
    }
    private _update() {}
}
export function g(type: string, property: any, childVDoms?: any) {
    let vnode: any = { type: type };
    vnode["property"] = property;
    if (childVDoms) {
        vnode["childVDoms"] = childVDoms;
    }
    return vnode;
}
export function createElement(type: string, property: any) {
    let dom = document.createElement(type);
    if (property["text"]) {
        dom.innerText = property["text"];
    }
    if (property["className"]) {
        dom.className = property["className"];
    }
    if (property["event"]) {
        for (let item in property["event"]) {
            dom.addEventListener(item, property["event"][item]);
        }
    }
    return dom;
}
export function patch(vdom: any) {
    function _patch(vdom: any) {
        var a;
        if (vdom.hasOwnProperty("type")) {
            a = createElement(vdom["type"], vdom["property"]);
        } else {
            a = vdom;
            //console.log(typeof a.mount);
        }
        for (let item in vdom.childVDoms) {
            let b = _patch(vdom.childVDoms[item]);
            if (b) {
                if (typeof b.mount === "function") {
                    b.mount(a);
                } else {
                    a.appendChild(b);
                }
            }
        }
        return a;
    }
    var virtualDom = document.createDocumentFragment();
    for (let item in vdom.childVDoms) {
        let _dom = _patch(vdom.childVDoms[item]);
        if (typeof _dom.mount === "function") {
            _dom.mount(virtualDom);
        } else {
            virtualDom.appendChild(_dom);
        }
    }
    return virtualDom;
}
export default Visual;
