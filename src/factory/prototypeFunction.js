function prototypeFunction(prototype) {
    return (object) => {
        if(object) {
            return {
                ...Object.create(object),
                ...prototype
            };
        } else {
            return Object.create(prototype);
        }
    };
}

module.exports = prototypeFunction;