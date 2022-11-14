import Visual, { g } from "../kernel/visual";
class Text extends Visual {
    constructor() {
        let state = {};
        let props = {};
        super(state, props);
    }
    render() {
        return g("div", {}, [
            g("div", {
                attributes: { contenteditable: "true" },
                text: "hahah",
                event: { click: this.test },
            }),
        ]);
    }
    test(event: any) {
        console.log(event,event.path[0]);
    }
}
export default Text;
