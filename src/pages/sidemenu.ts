import "./sidemenu.scss";
import Visual, { g } from "../kernel/visual";
class SideMenu extends Visual {
    constructor() {
        let state = {};
        let props = {};
        super(state, props);
    }
    render() {
        return g("div", { className: "sidemenu_container" }, [
            g("div", { text: "haha" }),
        ]);
    }
}
export default SideMenu;
