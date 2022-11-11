// interface noteItem {
//     text: string;
//     index: string;
// }
// console.log("hello world, change again");
// let body = document.body;
// let div_a = document.createElement("div");
// div_a.innerHTML = "haha";
// div_a.innerHTML = "heih";
// div_a.addEventListener("click", () => aler("0"));
// let div_b = document.createElement("div");
// div_b.innerHTML = "div_b";
// let frag = document.createDocumentFragment();
// frag.appendChild(div_a);
// frag.appendChild(div_b);
// console.log(frag);
// body.appendChild(frag);
// function aler(id: string) {
//     //console.log("alert" + id);
//     console.log(body.childNodes[Number(id) + 2]);
// }
// let note_list: noteItem[] = [
//     { text: "haha1", index: "1" },
//     { text: "haha2", index: "2" },
//     { text: "haha3", index: "3" },
//     { text: "haha4", index: "4" },
//     { text: "haha5", index: "5" },
//     { text: "haha6", index: "6" },
// ];
// let temp_container = document.createDocumentFragment();
// for (let item in note_list) {
//     console.log(note_list[item]);
//     let temp_div = document.createElement("div");
//     temp_div.innerHTML = note_list[item]["text"];
//     temp_div.setAttribute("contenteditable", "true");
//     temp_div.addEventListener("input", () => aler(note_list[item]["index"]));
//     temp_div.style.setProperty("background-color", "grey");
//     temp_container.appendChild(temp_div);
// }
// body.appendChild(temp_container);
// console.log(body.childNodes[5]);
// body.childNodes[5];
// import data from "./kernel/vnode/data";
// let sample_data_2 = data({ name: "yiqgao", list: ["a"] });
// sample_data_2["list"] = ["c", "d"];
// sample_data_2["name"] = "teige";
// import view from "./kernel/vnode/view";
// let view_sample = new view(sample_data_2);
// view_sample.createElement('div','hello','hello')
import "./index.scss";
import App from "./app";
const appRoot = document.getElementById("app");
let app = new App();
if (appRoot) {
    app.mount(appRoot);
}
