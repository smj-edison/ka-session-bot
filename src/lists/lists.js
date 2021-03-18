const multiFilter = require("../util/multiFilter.js");

function List() {
    this.list = [];
}

List.prototype.add = function(item) {
    return this.list.push(item) - 1;
}

List.prototype.remove = function(index) {
    return this.list.splice(index, 1)[0];
}



function TimeoutList(timeoutTime) {
    List.call(this);

    this.timeouts = [];
    this.timeoutTime = timeoutTime;
}

TimeoutList.prototype = Object.create(List.prototype);

TimeoutList.prototype.add = function(item) {
    const index = List.prototype.add.call(this, item);

    this.timeouts[index] = (new Date()).getMilliseconds() + this.timeoutTime;
};

TimeoutList.prototype.remove = function(index) {
    const removed = List.prototype.remove.call(this, index);
    this.timeouts.splice(index, 1);

    return removed;
}

TimeoutList.prototype.purgeExpired = function() {
    const now = (new Date()).getMilliseconds();
    let expired = [];

    [this.timeouts, this.list] = multiFilter([this.timeouts, this.list], (expireTime, item) => {
        if(now >= expireTime) {
            expired.push(item);
            return true;
        }
    });

    return expired;
};

TimeoutList.prototype.refresh(index) {
    this.timeouts[index] = (new Date()).getMilliseconds() + this.timeoutTime;
}


module.exports = {
    List,
    TimeoutList
};
