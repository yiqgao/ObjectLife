import "./gantt.scss";
class Gantt {
    state: any;
    props: any;
    constructor() {
        this.state = {
            from_date: "",
            to_date: "",
            total_date_block: 10,
            date_list: [
                { year: 2022, month: 11, day: 13, weekday: 0 },
                { year: 2022, month: 11, day: 14, weekday: 1 },
                { year: 2022, month: 11, day: 15, weekday: 2 },
                { year: 2022, month: 11, day: 16, weekday: 3 },
                { year: 2022, month: 11, day: 17, weekday: 4 },
                { year: 2022, month: 11, day: 18, weekday: 5 },
                { year: 2022, month: 11, day: 19, weekday: 6 },
                { year: 2022, month: 11, day: 20, weekday: 0 },
                { year: 2022, month: 11, day: 21, weekday: 1 },
                { year: 2022, month: 11, day: 22, weekday: 2 },
                { year: 2022, month: 11, day: 23, weekday: 3 },
            ],
            description_field_length: 350,
        };
        console.log(Date.now());
        this.props = {
            tasks: [
                {
                    id: "dhsjdkjsahjk",
                    name: "OPA",
                    from_date: "2022-11-01",
                    to_date: "2022-12-31",
                    child_tasks: [
                        {
                            id: "dhsjdkjsahjk",
                            name: "OPA-A",
                            from_date: "2022-11-01",
                            to_date: "2022-12-31",
                        },
                        {
                            id: "dhsjdkjsahjk",
                            name: "OPA-B",
                            from_date: "2022-11-01",
                            to_date: "2022-12-31",
                            child_tasks: [
                                {
                                    id: "dhsjdkjsahjk",
                                    name: "OPA-B-a",
                                    from_date: "2022-11-01",
                                    to_date: "2022-12-31",
                                },
                            ],
                        },
                    ],
                },
            ],
        };
    }
    private createElements() {
        let root = document.createElement("div");
        root.className = "gantt_container";
        root.addEventListener("dragend", this.listenClick);
        let description_field = document.createElement("div");
        description_field.style.width = `${this.state.description_field_length}px`;
        description_field.className = "gantt_description_field";
        let _plan_lines_field = document.createElement("div");
        _plan_lines_field.className = "gantt_plan_line_field";
        _plan_lines_field.appendChild(this._createPlans());
        root.appendChild(description_field);
        root.appendChild(this._createDivideLine());
        root.appendChild(_plan_lines_field);
        return root;
    }
    private _createDivideLine() {
        let virtualDom = document.createDocumentFragment();
        for (let item in this.state.date_list) {
            let _temp = document.createElement("div");
            _temp.className = "gantt_divide_line";
            let _display_tag = document.createElement("div");
            _display_tag.innerText = this.state.date_list[item].day;
            _temp.appendChild(_display_tag);
            virtualDom.appendChild(_temp);
        }
        return virtualDom;
    }
    private _createPlans() {
        let virtualDom = document.createDocumentFragment();
        let i = 0;
        while (i < 5) {
            i++;
            let _temp = document.createElement("div");
            _temp.className = "gantt_plan_line";
            _temp.style.width = `${i * 27}px`;
            _temp.setAttribute("draggable", "true");
            _temp.style.marginLeft = `${
                this.state.description_field_length + 2 + 27 * i
            }px`;
            virtualDom.appendChild(_temp);
        }
        return virtualDom;
    }
    listenClick(event: any) {
        console.log(event, document.elementFromPoint(event.x, event.y));
    }
    mount(dom: HTMLElement) {
        dom.appendChild(this.createElements());
    }
}
export default Gantt;
