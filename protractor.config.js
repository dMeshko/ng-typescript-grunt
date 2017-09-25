exports.config = {
    //seleniumAddress: "http://localhost:4444/wd/hub",
    
    baseUrl: "http://127.0.0.1:9000/",

    framework: "jasmine",

    capabilities: {
        browserName: "chrome"
    },

    specs: ["spec/e2e/**/*.*"],
    
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};