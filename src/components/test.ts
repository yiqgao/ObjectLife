import View, { g } from "../kernel/visual";
class Test extends View {
    constructor() {
        let state = {
            name: "teige",
            id: "0wusj37sjdnwi3",
            children: [
                {
                    name: "teige",
                    id: "0wusj37sjdnwi3",
                    children: [
                        { name: "teige", id: "0wusj37sjdnwi3" },
                        { name: "teige", id: "0wusj37sjdnwi3" },
                    ],
                },
                { name: "teige", id: "0wusj37sjdnwi3" },
            ],
        };
        let props = {};
        super(state, props);
        //console.log(this.state['children'])
        //console.log(this.props, this.state);
        //this.mount();
        console.log(this.state);
    }
    render() {
        return g(
            "div",
            {
                className: "root",
            },
            [
                g("div", {
                    className: "root",
                    text: `测试数据为${this.state.name}`,
                    event: { click: () => this.changes() },
                }),
                g(
                    "div",
                    {
                        className: "root",
                        text: "level 1 number 2",
                        event: { click: () => this.changes() },
                    },
                    [
                        g("div", {
                            className: "root",
                            text: "this is number 2 level 2 number 1",
                            event: { click: () => this.changes() },
                        }),
                    ]
                ),
            ]
        );
    }
    changes() {
        this.state.name = "yiqgao";
        //console.log(this.state);
    }
}
export default Test;
