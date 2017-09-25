module.exports = function(config) {
    config.set({
        frameworks: ["jasmine"],

        browsers: ["Chrome"],

        files: [
            "dist/app.js",
            "spec/unit/*.js"
        ],

        singleRun: false,
        debug: true
    });
};