const multiFilter = require("../util/multiFilter.js");

function List() {
    this.list = [];
}

List.prototype.add = function(item) {
    return this.list.push(item) - 1;
}

List.prototype.remove = function(index) {
    this.list.splice(index, 1);
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
    List.prototype.remove.call(this, index);
    this.timeouts.splice(index, 1);
}

TimeoutList.prototype.purgeExpired = function() {
    const now = (new Date()).getMilliseconds();
    [this.timeouts, this.list] = multiFilter([this.timeouts, this.list], expireTime => now >= expireTime);
};


module.exports = {
    List,
    TimeoutList
};
