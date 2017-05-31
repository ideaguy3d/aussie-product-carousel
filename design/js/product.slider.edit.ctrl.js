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
            var pgPositionTracker2 = [
                {side: "initialState"},
                {side: "right"}, // pgPosition[1] = '.pg-group0'
                {side: "right"}, // pgPosition[2] = '.pg-group1'
                {side: "right"}  // pgPosition[3] = '.pg-group2'
            ];
            var pgPositionTracker3 = [
                {side: "initialState"},
                {side: "right"}, // pgPosition[1] = '.pg-group0'
                {side: "right"}, // pgPosition[2] = '.pg-group1'
                {side: "right"}  // pgPosition[3] = '.pg-group2'
            ];
            var pgPositionTracker4 = [
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

            var removeIncrementLeft2 = function () {
                angular.element('.apc-row2.product-group.increment-left').each(function (i) {
                    angular.element(this).removeClass('increment-left');
                });
            };

            var removeIncrementLeft3 = function () {
                angular.element('.apc-row3.product-group.increment-left').each(function (i) {
                    angular.element(this).removeClass('increment-left');
                });
            };

            var removeIncrementLeft4 = function () {
                angular.element('.apc-row4.product-group.increment-left').each(function (i) {
                    angular.element(this).removeClass('increment-left');
                });
            };

            var domUpP1 = function (index) {
                // give the DOM a moment to update
                $timeout(function () {
                    // pg = product group... cache jq selectors
                    var pgElem = ".apc-row1.product-group" + (index - 1), // pgElem is supposed to be in cadence with pgPositionTracker
                        pgSelector = angular.element(pgElem),
                        pgActive = pgSelector.hasClass('active');
                    console.log("pgElem = " + pgElem);

                    if (pgActive) {
                        // pgPosition[1] = '.pg-group0'
                        // pgPosition[2] = '.pg-group1'
                        // pgPosition[3] = '.pg-group2'
                        if (pgPositionTracker[1].side === "left") {
                            angular.element('.apc-row1.product-group0').addClass('increment-left');
                        }

                        if (pgPositionTracker[2].side === "left") {
                            angular.element('.apc-row1.product-group1').addClass('increment-left');
                        }
                    }
                }, 10);
            };

            var domUp2P1 = function (index) {
                // give the DOM a moment to update
                $timeout(function () {
                    // pg = product group... cache jq selectors
                    var pgElem = ".apc-row2.product-group" + (index - 1), // pgElem is supposed to be in cadence with pgPositionTracker
                        pgSelector = angular.element(pgElem),
                        pgActive = pgSelector.hasClass('active');
                    console.log("pgElem = " + pgElem);

                    if (pgActive) {
                        // pgPosition[1] = '.pg-group0'
                        // pgPosition[2] = '.pg-group1'
                        // pgPosition[3] = '.pg-group2'
                        if (pgPositionTracker[1].side === "left") {
                            angular.element('.apc-row2.product-group0').addClass('increment-left');
                        }

                        if (pgPositionTracker[2].side === "left") {
                            angular.element('.apc-row2.product-group1').addClass('increment-left');
                        }
                    }
                }, 10);
            };

            var domUp3P1 = function (index) {
                // give the DOM a moment to update
                $timeout(function () {
                    // pg = product group... cache jq selectors
                    var pgElem = ".apc-row3.product-group" + (index - 1), // pgElem is supposed to be in cadence with pgPositionTracker
                        pgSelector = angular.element(pgElem),
                        pgActive = pgSelector.hasClass('active');
                    console.log("pgElem = " + pgElem);

                    if (pgActive) {
                        // pgPosition[1] = '.pg-group0'
                        // pgPosition[2] = '.pg-group1'
                        // pgPosition[3] = '.pg-group2'
                        if (pgPositionTracker[1].side === "left") {
                            angular.element('.apc-row3.product-group0').addClass('increment-left');
                        }

                        if (pgPositionTracker[2].side === "left") {
                            angular.element('.apc-row3.product-group1').addClass('increment-left');
                        }
                    }
                }, 10);
            };

            var domUp4P1 = function (index) {
                // give the DOM a moment to update
                $timeout(function () {
                    // pg = product group... cache jq selectors
                    var pgElem = ".apc-row4.product-group" + (index - 1), // pgElem is supposed to be in cadence with pgPositionTracker
                        pgSelector = angular.element(pgElem),
                        pgActive = pgSelector.hasClass('active');
                    console.log("pgElem = " + pgElem);

                    if (pgActive) {
                        // pgPosition[1] = '.pg-group0'
                        // pgPosition[2] = '.pg-group1'
                        // pgPosition[3] = '.pg-group2'
                        if (pgPositionTracker[1].side === "left") {
                            angular.element('.apc-row4.product-group0').addClass('increment-left');
                        }

                        if (pgPositionTracker[2].side === "left") {
                            angular.element('.apc-row4.product-group1').addClass('increment-left');
                        }
                    }
                }, 10);
            };

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
                            removeIncrementLeft();
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

            $scope.updateActiveArea2 = function (index) {
                switch (index) {
                    case 0:
                        pgPositionTracker2[0].side = "center";
                        if (pgPositionTracker2[1].side === "center") {
                            pgPositionTracker2[1].side = "right";
                            removeIncrementLeft2();
                        } else if (pgPositionTracker2[1].side === "center") {
                            pgPositionTracker2[1].side = "right";
                            removeIncrementLeft2();
                        } else if (pgPositionTracker2[2].side === "center") {
                            pgPositionTracker2[2].side = "right";
                        }

                        //------------------------------
                        // Most Important part of switch
                        $scope.activeArea2 = -1;
                        break;
                    case 1:
                        pgPositionTracker2[1].side = "center";
                        if (pgPositionTracker2[0].side === "center") {
                            pgPositionTracker2[0].side = "left";
                        } else if (pgPositionTracker2[2].side === "center") {
                            pgPositionTracker2[2].side = "right";
                            removeIncrementLeft2();
                        } else if (pgPositionTracker2[3].side === "center") {
                            pgPositionTracker2[3].side = "right";
                            removeIncrementLeft2();
                        }

                        //------------------------------
                        // Most Important part of switch
                        $scope.activeArea2 = 0;
                        break;
                    case 2:
                        pgPositionTracker2[2].side = "center";
                        if (pgPositionTracker2[0].side === "center") {
                            pgPositionTracker2[0].side = "left";
                        } else if (pgPositionTracker2[1].side === "center") {
                            pgPositionTracker2[1].side = "left";
                        } else if (pgPositionTracker2[3].side === "center") {
                            pgPositionTracker2[3].side = "right";
                        }

                        //------------------------------
                        // Most Important part of switch
                        $scope.activeArea2 = 1;
                        break;
                    case 3:
                        pgPositionTracker2[3].side = "center";
                        if (pgPositionTracker2[0].side === "center") {
                            pgPositionTracker2[0].side = "left";
                        } else if (pgPositionTracker2[1].side === "center") {
                            pgPositionTracker2[1].side = "left";
                        } else if (pgPositionTracker2[2].side === "center") {
                            pgPositionTracker2[2].side = "left";
                        }

                        //------------------------------
                        // Most Important part of switch
                        $scope.activeArea2 = 2;
                        break;
                }

                domUp2P1(index);
            };

            $scope.updateActiveArea3 = function (index) {
                switch (index) {
                    case 0:
                        pgPositionTracker3[0].side = "center";
                        if (pgPositionTracker3[1].side === "center") {
                            pgPositionTracker3[1].side = "right";
                            removeIncrementLeft3();
                        } else if (pgPositionTracker3[1].side === "center") {
                            pgPositionTracker3[1].side = "right";
                            removeIncrementLeft3();
                        } else if (pgPositionTracker3[2].side === "center") {
                            pgPositionTracker3[2].side = "right";
                        }

                        //------------------------------
                        // Most Important part of switch
                        $scope.activeArea3 = -1;
                        break;
                    case 1:
                        pgPositionTracker3[1].side = "center";
                        if (pgPositionTracker3[0].side === "center") {
                            pgPositionTracker3[0].side = "left";
                        } else if (pgPositionTracker3[2].side === "center") {
                            pgPositionTracker3[2].side = "right";
                            removeIncrementLeft3();
                        } else if (pgPositionTracker3[3].side === "center") {
                            pgPositionTracker3[3].side = "right";
                            removeIncrementLeft3();
                        }

                        //------------------------------
                        // Most Important part of switch
                        $scope.activeArea3 = 0;
                        break;
                    case 2:
                        pgPositionTracker3[2].side = "center";
                        if (pgPositionTracker3[0].side === "center") {
                            pgPositionTracker3[0].side = "left";
                        } else if (pgPositionTracker3[1].side === "center") {
                            pgPositionTracker3[1].side = "left";
                        } else if (pgPositionTracker3[3].side === "center") {
                            pgPositionTracker3[3].side = "right";
                        }

                        //------------------------------
                        // Most Important part of switch
                        $scope.activeArea3 = 1;
                        break;
                    case 3:
                        pgPositionTracker3[3].side = "center";
                        if (pgPositionTracker3[0].side === "center") {
                            pgPositionTracker3[0].side = "left";
                        } else if (pgPositionTracker3[1].side === "center") {
                            pgPositionTracker3[1].side = "left";
                        } else if (pgPositionTracker3[2].side === "center") {
                            pgPositionTracker3[2].side = "left";
                        }

                        //------------------------------
                        // Most Important part of switch
                        $scope.activeArea3 = 2;
                        break;
                }

                domUp3P1(index);
            };

            $scope.updateActiveArea4 = function (index) {
                switch (index) {
                    case 0:
                        pgPositionTracker4[0].side = "center";
                        if (pgPositionTracker4[1].side === "center") {
                            pgPositionTracker4[1].side = "right";
                            removeIncrementLeft4();
                        } else if (pgPositionTracker4[1].side === "center") {
                            pgPositionTracker4[1].side = "right";
                            removeIncrementLeft4();
                        } else if (pgPositionTracker4[2].side === "center") {
                            pgPositionTracker4[2].side = "right";
                        }

                        //------------------------------
                        // Most Important part of switch
                        $scope.activeArea4 = -1;
                        break;
                    case 1:
                        pgPositionTracker4[1].side = "center";
                        if (pgPositionTracker4[0].side === "center") {
                            pgPositionTracker4[0].side = "left";
                        } else if (pgPositionTracker4[2].side === "center") {
                            pgPositionTracker4[2].side = "right";
                            removeIncrementLeft4();
                        } else if (pgPositionTracker4[3].side === "center") {
                            pgPositionTracker4[3].side = "right";
                            removeIncrementLeft4();
                        }

                        //------------------------------
                        // Most Important part of switch
                        $scope.activeArea4 = 0;
                        break;
                    case 2:
                        pgPositionTracker4[2].side = "center";
                        if (pgPositionTracker4[0].side === "center") {
                            pgPositionTracker4[0].side = "left";
                        } else if (pgPositionTracker4[1].side === "center") {
                            pgPositionTracker4[1].side = "left";
                        } else if (pgPositionTracker4[3].side === "center") {
                            pgPositionTracker4[3].side = "right";
                        }

                        //------------------------------
                        // Most Important part of switch
                        $scope.activeArea4 = 1;
                        break;
                    case 3:
                        pgPositionTracker4[3].side = "center";
                        if (pgPositionTracker4[0].side === "center") {
                            pgPositionTracker4[0].side = "left";
                        } else if (pgPositionTracker4[1].side === "center") {
                            pgPositionTracker4[1].side = "left";
                        } else if (pgPositionTracker4[2].side === "center") {
                            pgPositionTracker4[2].side = "left";
                        }

                        //------------------------------
                        // Most Important part of switch
                        $scope.activeArea4 = 2;
                        break;
                }

                domUp4P1(index);
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
            $scope.indicatorCheck2 = function () {
                var aa = $scope.activeArea2;
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
            $scope.indicatorCheck3 = function () {
                var aa = $scope.activeArea3;
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
            $scope.indicatorCheck4 = function () {
                var aa = $scope.activeArea4;
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

            $scope.getCategories = "categories from product.slider.edit.ctrl.js file";
        }
    ]);
})();