const prototypeFunction = require("../factory/prototypeFunction.js");

const makeQueue = prototypeFunction({
    init() {
        this.queue = [];
        this.values = {};
    },
    push(key, value) {
        if(key in this.values) {
            throw "Cannot add a key twice";
        }

        this.values[key] = value;

        this.queue.push(key);
    },
    pop() {
        const nextItemKey = this.queue.splice(0, 1)[0];
        const nextItem = [nextItemKey, this.values[nextItemKey]];

        delete this.values[nextItemKey];

        return nextItem;
    },
    getAll() {
        let items = [];

        for(var i = 0; i < this.queue.length; i++) {
            items.push([this.queue[i], this.values[this.queue[i]]]);
        }

        return this.queue;
    }
});
