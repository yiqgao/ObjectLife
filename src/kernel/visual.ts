import { createReactive } from "./reactive";
class Visual {
    state: any;
    props: any;
    private elements: any;
    render() {}
    beforeMount() {}
    monuted() {}
    constructor(state: any, props: any) {
        this._init(state, props);
    }
    private _init(state: any, props: any) {
        this.state = createReactive(state);
        this.props = createReactive(props);
    }
    mount(dom: HTMLElement) {
        this.elements = document.createElement("div");
        this.beforeMount();
        this._render();
        this._patch();
        dom.appendChild(this.elements);
        this.monuted();
        console.log("mount success");
    }
    private _render() {
        console.log(this.render());
    }
    private _patch() {}
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
export default Visual;
