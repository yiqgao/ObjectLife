import View, { g } from "../kernel/visual";
class Test extends View {
    constructor() {
        let state = {
            name: "teige",
            id: "0wusj37sjdnwi3",
            childlist: [
                { name: "aa", value: 1 },
                { name: "bb", value: 1 },
                { name: "cc", value: 1 },
                { name: "dd", value: 1 },
            ],
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
        //console.log(this.state);
    }
    createChild() {
        let lis: any = [];
        for (let item in this.state.childlist) {
            //console.log(this.state.childlist[item]);
            lis.push(g("div", { text: this.state.childlist[item].name }));
        }
        return lis;
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
                        g(
                            "div",
                            {
                                className: "root",
                                text: "level 1 number 2",
                                event: { click: () => this.changes() },
                            },
                            this.createChild()
                        ),
                    ]
                ),
            ]
        );
    }
    changes() {
        this.state.childlist[1].name = "yiqgao";
        //console.log(this.state);
    }
}
export default Test;
