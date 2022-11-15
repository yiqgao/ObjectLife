import Visual, { g } from "./kernel/visual";
import Text from "./components/text";
class App extends Visual {
    constructor() {
        let state = {};
        let props = {};
        super(state, props);
    }
    render() {
        let a: any = new Text();
        return g("div", {}, [a]);
    }
}
export default App;
