function getList() {
    return {
        list: []
    };
}

function makeListTimeout(list, timeoutTime) {
    list.timeout = [];
    list.timeoutTime = timeoutTime;

    return list;
}


module.exports = {
    getList,
    makeListTimeout
};
