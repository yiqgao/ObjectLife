import Visual, { g } from "../kernel/visual";
class Word extends Visual {
    constructor() {
        let state = {};
        let props = {};
        super(state, props);
    }
    render() {
        return g("div", {});
    }
}
export default Word;
