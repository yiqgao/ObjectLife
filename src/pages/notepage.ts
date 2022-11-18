import "./notepage.scss";
import Visual, { g } from "../kernel/visual";
import Gantt from "../components/gantt";
class NotePage extends Visual {
    constructor() {
        let state = {};
        let props = {};
        super(state, props);
    }
    render() {
        let gantt = new Gantt();
        return g("div", { className: "notepage_container" }, [gantt]);
    }
}
export default NotePage;
