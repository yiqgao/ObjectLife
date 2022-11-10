import Reactive from "./vnode/reactive";
class View {
    data: any;
    props: any;
    dom: any;
    _domContainer: any;
    constructor(props: any, key: string) {
        //console.log(props)
        props.addObserver(key, () => this.dataChange());
        this.props = props.data;
        this.dom = { nodeobj: document.createElement("div"), vnode: {} };
        this._domContainer = document.createDocumentFragment();
    }
    initialData(data: any) {
        const _reactive = new Reactive(data);
        this.data = _reactive.data;
        _reactive.addObserver("", this.dataChange);
    }
    createElement(type: string, property?: any, key?: any) {
        let _node = document.createElement(type);
        //console.log(_node)
        let _vnode: any = {};
        if (property) {
            if (property["text"]) {
                _node.innerText = property["text"];
                _vnode["innerText"] = property["text"];
            }
            if (property["class"]) {
                _node.className = property["class"];
                _vnode["className"] = property["class"];
            }
            if (property["attributes"]) {
                for (let item in property["attributes"]) {
                    _node.setAttribute(item, property["attributes"][item]);
                }
                _vnode["attributes"] = property["attributes"];
            }
        }
        return { vnode: _vnode, nodeobj: _node };
    }
    appendChild(Node: any, parentNode?: any) {
        if (parentNode) {
            if (parentNode["vnode"]["childNodes"]) {
                parentNode["vnode"]["childNodes"].push(Node["vnode"]);
            } else {
                parentNode["vnode"]["childNodes"] = [];
                parentNode["vnode"]["childNodes"].push(Node["vnode"]);
            }
            parentNode["nodeobj"].appendChild(Node["nodeobj"]);
        } else {
            if (this.dom["vnode"]["childNodes"]) {
                this.dom["vnode"]["childNodes"].push(Node["vnode"]);
            } else {
                this.dom["vnode"]["childNodes"] = [];
                this.dom["vnode"]["childNodes"].push(Node["vnode"]);
            }
            this._domContainer.appendChild(Node["nodeobj"]);
        }
    }
    mount() {
        this.dom["nodeobj"].appendChild(this._domContainer);
    }
    dataChange() {
        //console.log("view: data has changed");
        console.log(this.dom['vnode'].hasOwnProperty("childNodes"));
        console.log(this.dom["nodeobj"].childNodes[2].innerText='hahha') 
    }
}
export default View;
