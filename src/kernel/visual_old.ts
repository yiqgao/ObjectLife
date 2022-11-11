import Reactive from "./vnode/reactive";
import { createReactive, observe } from "./reactive";
class Visual {
    state: any;
    props: any;
    dom: any;
    constructor(state: any, props?: any) {
        const _reactive = new Reactive(state);
        let ssse = {
            name: "teige",
            id: "0wusj37sjdnwi3",
            children: [
                {
                    name: "teige",
                    id: "0wusj37sjdnwi3",
                    children: [
                        { name: "teige1", id: "0wusj37sjdnwi3" },
                        { name: "teige2", id: "0wusj37sjdnwi3" },
                    ],
                },
                { name: "teige", id: "0wusj37sjdnwi3" },
            ],
        };
        let tes = createReactive(ssse);
        tes.children[1].name = "teige8";
        observe(() => {
            console.log(tes.children);
        });
        _reactive.addObserver("aa", () => this.dataChange());
        this.state = _reactive.data;
        this.props = props;
        this.mount();
    }
    render() {}
    mount() {
        let vdom: any = this.render();
        this.dom = createElement(vdom["type"], vdom["property"]);
        this.dom.appendChild(patch(vdom));
    }
    dataChange() {
        let vdom: any = this.render();
        var first = this.dom.firstElementChild;
        while (first) {
            first.remove();
            first = this.dom.firstElementChild;
        }
        this.dom.appendChild(patch(vdom));
    }
}
export function h(type: string, property: any, childVDoms?: any) {
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
        //console.log(property["text"]);
        dom.innerText = property["text"];
    }
    if (property["className"]) {
        dom.className = property["className"];
    }
    if (property["event"]) {
        for (let item in property["event"]) {
            dom.addEventListener(item, property["event"][item]);
            //console.log(item, property["event"][item]);
        }
        //console.log(property["event"]);
    }
    return dom;
}
export function patch(vdom: any) {
    //console.log(this.vdom);
    function _patch(vdom: any) {
        //console.log(vdom.hasOwnProperty("type"));

        var a;
        if (vdom.hasOwnProperty("type")) {
            a = createElement(vdom["type"], vdom["property"]);
        } else {
            //console.log(vdom.dom);
            a = vdom.dom;
            //console.log('vdom-----------',vdom,vdom.childVDoms)
        }

        //console.log(a);
        for (let item in vdom.childVDoms) {
            //console.log(vdom.childVDoms);
            let b = _patch(vdom.childVDoms[item]);
            if (b) {
                //console.log(a, b);
                a.appendChild(b);
            }
            //console.log("node " + item, vdom.childVDoms[item]);
        }
        return a;
    }
    var virtualDom = document.createDocumentFragment();
    for (let item in vdom.childVDoms) {
        let _dom = _patch(vdom.childVDoms[item]);
        virtualDom.appendChild(_dom);
    }
    return virtualDom;
    //console.log(_patch(this.vdom));
    // console.log(this.vdom);
}
export default Visual;
