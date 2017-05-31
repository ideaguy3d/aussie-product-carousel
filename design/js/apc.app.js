/**
 * Created by Julius Alvarado on 5/5/2017.
 */

(function () {
    var app = angular.module('ap-slider', ['firebase', 'ngRoute']);

    app.run(["$rootScope", "$location", function($rootScope, $location) {
        $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
            console.log("an error was successfully picked up");
            if (error === "AUTH_REQUIRED") {
                $location.path("/");
            }
        });
    }]);

    app.config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'design/js/views/view.login.html',
                    controller: 'ApcLoginCtrl',
                    controllerAs: 'login',
                    resolve: {
                        userInfo: [function () {
                            return "user info returned";
                        }]
                    }
                })
                .when('/edit', {
                    templateUrl: 'design/js/views/view.edit.products.html',
                    controller: 'apcSliderEditCtrl',
                    resolve: {
                        "requireAuth": ['Auth', '$location', function(Auth, $location){
                            Auth.$requireSignIn().then(function(auth){
                                //$location.path('/edit');
                                console.log("Successfully signed in");
                            }, function(error){
                                $location.path('/');
                                console.log("ERROR: user is NOT logged in!!");
                            });
                        }]
                    }
                })
                .when('/preview', {
                    templateUrl: 'design/js/views/view.preview.product.slider.html'
                })
                .when('/trialanderror', {
                    templateUrl: 'design/js/views/view.trial.and.error.html'
                });
        }
    ]);

    app.factory('Auth', ['$firebaseAuth', function($firebaseAuth){
        return $firebaseAuth();
    }]);
})();

//