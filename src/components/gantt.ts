import "./gantt.scss";
class Gantt {
    state: any;
    props: any;
    constructor() {
        this.state = {};
        this.props = {};
    }
    private createElements() {
        let root = document.createElement("div");
        root.className = "gantt_container";
        root.addEventListener("click", this.listenClick);
        let test = document.createElement("div");
        test.innerText = "hahhaha";
        root.appendChild(test);
        return root;
    }
    listenClick(event: any) {
        console.log(document.elementFromPoint(event.x, event.y));
        //console.log(event.x,event.y)
    }
    mount(dom: HTMLElement) {
        dom.appendChild(this.createElements());
    }
}
export default Gantt;
