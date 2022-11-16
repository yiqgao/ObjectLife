import "./notepage.scss";
import Visual, { g } from "../kernel/visual";
class NotePage extends Visual {
    constructor() {
        let state = {};
        let props = {};
        super(state, props);
    }
    render() {
        return g("div", { className: "notepage_container" });
    }
}
export default NotePage;
