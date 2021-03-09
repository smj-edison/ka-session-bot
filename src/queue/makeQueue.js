const prototypeFunction = require("../factory/prototypeFunction.js");

const QueuePrototypify = prototypeFunction({
    push(key, value) {
        this.queue.push([key, value]);
    },
    pop() {
        return this.queue.splice(0, 1)[0];
    },
    getAll() {
        return this.queue;
    }
});

const makeQueue = (queue) => {
    var queue = QueuePrototypify(queue);

    queue.queue = [];
};
