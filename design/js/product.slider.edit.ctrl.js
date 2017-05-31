/**
 * Created by user on 4/28/2017.
 */

(function () {
    "use strict";
    var app = angular.module('ap-slider');
    app.controller('apcSliderEditCtrl', ['$scope', '$timeout', 'jProductGroup1Data', 'requireAuth', 'Auth',
        function ($scope, $timeout, jProductGroup1Data, requireAuth, Auth) {
            // Row1 Data
            $scope.apcRow1Group1 = jProductGroup1Data.Row1Group1;
            $scope.apcRow1Group2 = jProductGroup1Data.Row1Group2;
            $scope.apcRow1Group3 = jProductGroup1Data.Row1Group3;
            $scope.apcRow1Group4 = jProductGroup1Data.Row1Group4;

            // Row2 Data
            $scope.apcRow2Group1 = jProductGroup1Data.Row2Group1;
            $scope.apcRow2Group2 = jProductGroup1Data.Row2Group2;
            $scope.apcRow2Group3 = jProductGroup1Data.Row2Group3;
            $scope.apcRow2Group4 = jProductGroup1Data.Row2Group4;

            // Row3 Data
            $scope.apcRow3Group1 = jProductGroup1Data.Row3Group1;
            $scope.apcRow3Group2 = jProductGroup1Data.Row3Group2;
            $scope.apcRow3Group3 = jProductGroup1Data.Row3Group3;
            $scope.apcRow3Group4 = jProductGroup1Data.Row3Group4;

            // Row4 Data
            $scope.apcRow4Group1 = jProductGroup1Data.Row4Group1;
            $scope.apcRow4Group2 = jProductGroup1Data.Row4Group2;
            $scope.apcRow4Group3 = jProductGroup1Data.Row4Group3;
            $scope.apcRow4Group4 = jProductGroup1Data.Row4Group4;

            $scope.activeArea = -1;
            $scope.activeArea2 = -1;
            $scope.activeArea3 = -1;
            $scope.activeArea4 = -1;

            $scope.repetitionAmount = [0, 1, 2];
            $scope.incrementLeft = false;
            $scope.ratioPortrait = true; // have a function determine if image is portrait
            $scope.ratioLandscape = true; // have a function determine if image is landscape
            $scope.apcProducts = [];

            //-- private vars/functions:
            var pgPositionTracker = [
                {side: "initialState"},
                {side: "right"}, // pgPosition[1] = '.pg-group0'
                {side: "right"}, // pgPosition[2] = '.pg-group1'
                {side: "right"}  // pgPosition[3] = '.pg-group2'
            ];

            var indexer = 0, prodGrpArr = [], counter = 0, k;

            var removeIncrementLeft = function () {
                angular.element('.product-group.increment-left').each(function (i) {
                    angular.element(this).removeClass('increment-left');
                });
            };

            var domUpP1 = function (index) {
                // give the DOM a moment to update
                $timeout(function () {
                    // pg = product group... cache jq selectors
                    var pgElem = ".product-group" + (index - 1), // pgElem is supposed to be in cadence with pgPositionTracker
                        pgSelector = angular.element(pgElem),
                        pgActive = pgSelector.hasClass('active');
                    console.log("pgElem = " + pgElem);

                    if (pgActive) {
                        // pgPosition[1] = '.pg-group0'
                        // pgPosition[2] = '.pg-group1'
                        // pgPosition[3] = '.pg-group2'
                        if (pgPositionTracker[1].side === "left") {
                            angular.element('.product-group0').addClass('increment-left');
                        }
                        // else if (pgPositionTracker[1].side === "right") {
                        //     angular.element('.product-group0').removeClass('increment-left');
                        // }

                        if (pgPositionTracker[2].side === "left") {
                            angular.element('.product-group1').addClass('increment-left');
                        }
                        // else if (pgPositionTracker[1].side === "right") {
                        //     angular.element('.product-group1').removeClass('increment-left');
                        // }
                    }
                }, 10);
            };

            //-- public functions:
            $scope.apcSignout = function () {
                Auth.$signOut();
            };

            $scope.updateActiveArea = function (index) {
                switch (index) {
                    case 0:
                        pgPositionTracker[0].side = "center";
                        if (pgPositionTracker[1].side === "center") {
                            pgPositionTracker[1].side = "right";
                            removeIncrementLeft();
                        } else if (pgPositionTracker[1].side === "center") {
                            pgPositionTracker[1].side = "right";
                        } else if (pgPositionTracker[2].side === "center") {
                            pgPositionTracker[2].side = "right";
                        }

                        //------------------------------
                        // Most Important part of switch
                        $scope.activeArea = -1;
                        break;
                    case 1:
                        pgPositionTracker[1].side = "center";
                        if (pgPositionTracker[0].side === "center") {
                            pgPositionTracker[0].side = "left";
                        } else if (pgPositionTracker[2].side === "center") {
                            pgPositionTracker[2].side = "right";
                            removeIncrementLeft();
                        } else if (pgPositionTracker[3].side === "center") {
                            pgPositionTracker[3].side = "right";
                            removeIncrementLeft();
                        }

                        //------------------------------
                        // Most Important part of switch
                        $scope.activeArea = 0;
                        break;
                    case 2:
                        pgPositionTracker[2].side = "center";
                        if (pgPositionTracker[0].side === "center") {
                            pgPositionTracker[0].side = "left";
                        } else if (pgPositionTracker[1].side === "center") {
                            pgPositionTracker[1].side = "left";
                        } else if (pgPositionTracker[3].side === "center") {
                            pgPositionTracker[3].side = "right";
                        }

                        //------------------------------
                        // Most Important part of switch
                        $scope.activeArea = 1;
                        break;
                    case 3:
                        pgPositionTracker[3].side = "center";
                        if (pgPositionTracker[0].side === "center") {
                            pgPositionTracker[0].side = "left";
                        } else if (pgPositionTracker[1].side === "center") {
                            pgPositionTracker[1].side = "left";
                        } else if (pgPositionTracker[2].side === "center") {
                            pgPositionTracker[2].side = "left";
                        }

                        //------------------------------
                        // Most Important part of switch
                        $scope.activeArea = 2;
                        break;
                }

                domUpP1(index);
            };

            $scope.indicatorCheck = function () {
                var aa = $scope.activeArea;
                if (aa === -1) {
                    return 0;
                } else if (aa === 0) {
                    return 1;
                } else if (aa === 1) {
                    return 2;
                } else if (aa === 2) {
                    return 3;
                }
            };

            var _newImageUrl_g1p1 = 'Paste image url';

            $scope.row1products = {
                group1product1: {
                    image: function (newImageUrl) {
                        if (newImageUrl === 'g1p1') {
                            return 'group1Product1 imageUrl'
                        } else if (newImageUrl === 0) {
                            _newImageUrl_g1p1 = "John West";
                            return _newImageUrl_g1p1;
                        }

                        // if there isn't an argument this is a getter
                        return arguments.length ? (_newImageUrl_g1p1 = newImageUrl)
                            : _newImageUrl_g1p1;
                    }
                },
                group1product2: {
                    image: function (newImageUrl) {

                    }
                },
                group1product3: {
                    image: function (newImageUrl) {

                    }
                },
                group1product4: {
                    image: function (newImageUrl) {

                    }
                }
            };

            $scope.setRow1 = function (index, productGroup) {
                // ensure for in loop happens only once
                if (indexer < 1) {
                    // fill the private prodGrpArr
                    for (k in $scope.apcRow1) {
                        // make sure 'k' is NOT being inherited
                        if ($scope.apcRow1.hasOwnProperty(k)) {
                            prodGrpArr[counter] = $scope.apcRow1[k];
                            counter++;
                        }
                    }

                    // copy into $scope.apcProducts only what is needed from prodGrpArr
                    for (var i = 0; i < 4; i++) {
                        $scope.apcProducts[i] = prodGrpArr[i];
                        // get rid of keys that have a '$'
                        var keys = Object.keys($scope.apcProducts[i]);
                        keys = keys.filter(function (e) {
                            return e.includes('$');
                        });
                        // $scope.apcProducts should be cleaned up after this loop
                        keys.forEach(function (e) {
                            delete $scope.apcProducts[i][e];
                        });
                    }
                }
                indexer++;
            };

            $scope.oldSetRow1 = function (index, product) {
                switch (product.$id) {
                    case "Group1":
                        exposeRow1Model(product);
                        break;
                    case "Group2":
                        exposeRow1Model(product);
                        break;
                    case "Group3":
                        exposeRow1Model(product);
                        break;
                    case "Group4":
                        exposeRow1Model(product);
                        break;
                    default:
                        console.log("ERROR: parent index out of range!")
                }
            };

            var exposeRow1Model = function (productGroup) {
                var prodGrpArr = [], counter = 0, k;
                for (k in productGroup) {
                    // make sure 'k' is NOT being inherited
                    if (productGroup.hasOwnProperty(k)) {
                        prodGrpArr[counter] = productGroup[k];
                        counter++;
                    }
                }
                console.log(prodGrpArr);
            };

            $scope.bindToProductsModel = function (index) {
                return $scope.g1p1 = "a cool binding";
            };

            $scope.getCategories = "categories from product.slider.edit.ctrl.js file";
        }
    ]);
})();