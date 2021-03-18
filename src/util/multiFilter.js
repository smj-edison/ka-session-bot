function multiFilter(lists, filter) {
    let newLists = lists.map(_ => []); // init new lists
    
    // assume all lists are the same length
    for(let i = 0; i < lists[0].length; i++) {
        if(filter(...lists.map(list => list[i]))) {
            for(let j = 0; j < lists.length; j++) {
                newLists[j].push(lists[i][j]);
            }
        }
    }

    return newLists;
}

module.exports = multiFilter;
