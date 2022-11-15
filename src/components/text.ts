import "./text.scss";
import Visual, { g } from "../kernel/visual";
class Text extends Visual {
    constructor() {
        let state = {};
        let props = {
            input_text: "请输入",
        };
        super(state, props);
    }
    render() {
        return g("div", {}, [
            g("div", {
                attributes: { contenteditable: "true" },
                text: this.props.input_text,
                className: "text_input_field",
                event: {
                    input: this.test,
                    mouseover: this.bl,
                    mouseleave: this.lea,
                },
            }),
        ]);
    }
    test(event: any) {
        console.log(event, event.path[0].innerText);
    }
    bl() {
        console.log("blur");
    }
    lea() {
        console.log("leave");
    }
}
export default Text;
