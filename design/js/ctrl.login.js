/**
 * Created by Julius Alvarado on 5/19/2017.
 */

(function () {
    var app = angular.module('ap-slider'),
        controllerId = 'ApcLoginCtrl';

    app.controller(controllerId, ['$location', 'Auth', 'userInfo',
        function ($location, Auth, userInfo) {
            var vm = this;
            vm.error = "";

            vm.apcLogin = function () {
                Auth.$signInWithEmailAndPassword(vm.email, vm.password)
                    .then(function (firebaseUser) {
                        // console.log("Signed in as:", firebaseUser.uid);
                        $location.path('/edit');
                    })
                    .catch(function (error) {
                        // console.error("Authentication failed:", error);
                        vm.error = error;
                    });
            }
        }
    ]);
})();