"use strict";
var ng;
(function (ng) {
    var ts;
    (function (ts) {
        var AppConfig = (function () {
            function AppConfig($stateProvider, $urlRouterProvider) {
                this.$stateProvider = $stateProvider;
                this.$urlRouterProvider = $urlRouterProvider;
                $urlRouterProvider.otherwise("/");
                $stateProvider.state("app", {
                    url: "/",
                    abstract: true,
                    views: {
                        "content": {
                            template: "<h2>hello!</h2>",
                            controller: function () { },
                            controllerAs: "vm"
                        }
                    }
                }).state("app.home", {
                    url: ""
                });
            }
            AppConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
            return AppConfig;
        }());
        angular.module("ng-ts").config(AppConfig);
    })(ts = ng.ts || (ng.ts = {}));
})(ng || (ng = {}));
//# sourceMappingURL=states.js.map