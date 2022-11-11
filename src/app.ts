import Visual, { g } from "./kernel/visual";
import Test from "./components/test";
class App extends Visual {
    constructor(props: any) {
        let state = {};
        super(state, props);
    }
    render() {
        let a: any = new Test();
        return g("div", {}, [a, g("div", { text: "this is root" })]);
    }
}
export default App;
