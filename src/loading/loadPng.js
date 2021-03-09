const axios = require("axios");
const {PNG} = require("pngjs");

async function loadPng(url) {
    return new Promise((resolve, reject) => {
        var png = new PNG({
            filterType: -1
        });

        axios({
            method: 'get',
            url: url,
            responseType: 'stream'
        }).then(response => {
            response.data.pipe(png);
        });

        png.on("parsed", () => {
            resolve(png);
        });
    });
}

module.exports = loadPng;
