import Visual, { h } from "./kernel/visual";
import Test from "./components/test";
class App extends Visual {
    constructor(props: any) {
        let state = {};
        super(state, props);
        console.log(this.dom,this.state,this.props);
    }
    render() {
        return h("div", {}, [new Test({}), h("div", { text: "this is root" })]);
    }
}
export default App;
