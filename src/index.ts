import "./index.scss";
import App from "./app";
const appRoot = document.getElementById("app");
let app = new App();
if (appRoot) {
    app.mount(appRoot);
}
