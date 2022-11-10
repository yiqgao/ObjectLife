import View from "../kernel/view";
import "./text.scss";
class Text extends View {
    constructor(props: any, key: string) {
        super(props, key);
        // let data = {
        //     name: "teige",
        //     sex: "male",
        // };
        // this.initialData(data);

        for (let item in this.props) {
            let a = this.createElement("div", {
                text: this.props[item],
                attributes: { contenteditable: "true" },
            });
            //console.log(a);
            this.appendChild(a);
            let b = this.createElement("div", {
                text: item,
                attributes: { contenteditable: "true" },
            });
            this.appendChild(b, a);
        }
        this.mount();
        console.log(this.dom["vnode"]);
        // console.log(this.data);
        console.log(this.props);
        console.log(this.dom["nodeobj"].childNodes);
    }
}
export default Text;
