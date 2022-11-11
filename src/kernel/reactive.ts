const rawToProxy = new WeakMap();
function createReactive(data: any) {
    //console.log(data);
    return createProxy(data);
}
function createProxy(data: any): any {
    return new Proxy(data, {
        set(this, target, key, val, receiver) {
            const result = Reflect.set(target, key, val, receiver);
            console.log("set", key, val);
            return result;
        },
        get(target, key, receiver) {
            //console.log("Reflect get", Reflect.ownKeys(target));
            //console.log("get", key); // 监听
            const result = Reflect.get(target, key, receiver);
            console.log('get', key)
            if (typeof result === "object") {
                return createProxy(result);
            }
            return result;
        }, // 返回执行的方法
        deleteProperty(target, key) {
            const result = Reflect.deleteProperty(target, key);
            //console.log("delete property", key);
            return result; // 是否删除成功，为一个布尔值
        },
    });
}
function observe(func: any) {
    console.log(func);
}
export { createReactive, observe };
