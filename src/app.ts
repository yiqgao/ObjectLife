import Visual, { g } from "./kernel/visual";
import Text from "./components/text";
import SideMenu from "./pages/sidemenu";
import NotePage from "./pages/notepage";
class App extends Visual {
    constructor() {
        let state = {};
        let props = {};
        super(state, props);
    }
    render() {
        let sideMenu = new SideMenu();
        let notePage = new NotePage();
        return g("div", {}, [sideMenu, notePage]);
    }
}
export default App;
