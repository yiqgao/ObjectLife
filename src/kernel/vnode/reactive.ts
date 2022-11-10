class Reactive {
    data: any;
    observerList: any;
    constructor(data: object) {
        const _this = this;
        this.data = new Proxy(data, {
            set(this, target, key, val, receiver) {
                const result = Reflect.set(target, key, val, receiver);
                //console.log("set", key, val);
                _this.callObserver();
                return result;
            },
            get(target, key, receiver) {
                //console.log("Reflect get", Reflect.ownKeys(target));
                //console.log("get", key); // 监听
                const result = Reflect.get(target, key, receiver);
                return result;
            }, // 返回执行的方法
            deleteProperty(target, key) {
                const result = Reflect.deleteProperty(target, key);
                //console.log("delete property", key);
                return result; // 是否删除成功，为一个布尔值
            },
        });
        this.observerList = {};
    }
    addObserver(key: string, func: any) {
        this.observerList[key] = func;
    }
    callObserver() {
        //console.log(this.observerList);
        for (let item in this.observerList) {
            this.observerList[item]();
            //console.log(this.observerList[item]);
        }
    }
}
export function createProxy() {}
export default Reactive;
