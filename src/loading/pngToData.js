const loadPng = require("./loadPng.js");

async function pngToData(url) {
    return loadPng(url).then(png => {
        let parsedData = [];

        let length = png.data[2];
        length += png.data[1] << 8;
        length += png.data[0] << 16;

        let imageData = png.data.slice(4);

        for(let i = 0; i < length; i++) {
            let imageIndex = Math.floor((i * 4) / 3);

            parsedData.push(imageData[imageIndex]);
        }

        return parsedData;
    });
}

module.exports = pngToData;
