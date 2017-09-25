namespace ng.ts {
    class AppConfig {
        static $inject: Array<string> = ["$stateProvider", "$urlRouterProvider"];

        constructor(public $stateProvider: angular.ui.IStateProvider, public $urlRouterProvider: angular.ui.IUrlRouterProvider) {
            $urlRouterProvider.otherwise("/"); //for undefined state go to the default/home


            $stateProvider.state("app", {
                url: "/",
                abstract: true,
                views: {
                    "content": {
                        template: "<h2>hello!</h2>",
                        controller: function(){},
                        controllerAs: "vm"
                    }
                }
            }).state("app.home", {
                url: "" // Empty string for "app" state to override the / abstract state
            });
            // $stateProvider.state("app", {
            //     url: "/",
            //     abstract: "true",
            //     views: {
            //         // "header": {
            //         //     controller: "HeaderController",
            //         //     template: require("app/common/header.html")
            //         // },
            //         "content": {
            //             templateUrl: "app/components/select-pizza/select-pizza.html",
            //             controller: "SelectPizzaController"
            //         },
            //         // "footer": {
            //         //     controller: "FooterController",
            //         //     template: require("app/common/footer.html")
            //         // }
            //     }
            // }).state("app.home", {
            //     url: "" // Empty string for "app" state to override the / abstract state
            // }).state("app.pizzaStatus", {
            //     url: "pizza-status",
            //     views: {
            //         "content@": {
            //             templateUrl: "app/components/pizza-status/pizza-status.html",
            //             controller: "PizzaStatusController"
            //         }
            //     }
            // });
        }
    }

    angular.module("ng-ts").config(AppConfig);
}