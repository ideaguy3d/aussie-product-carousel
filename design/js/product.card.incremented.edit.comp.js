/**
 * Created by Julius Alvarado on 5/15/2017.
 */

(function () {
    "use strict";

    var app = angular.module('ap-slider'),
        componentId = 'productCardIncrementedEdit';

    app.component(componentId, {
        templateUrl: 'design/js/product.card.incremented.edit.temp.html',
        bindings: {
            product: '=',
            activeArea: '<',
            apcProdRow: '@'
        },
        controller: ['jProductGroup1Data', IncrementedProductGroupCtrl]
    });

    function IncrementedProductGroupCtrl(jProductGroup1Data) {
        var vm = this;
        vm.showImageUrl = true;
        vm.showHeader = true;
        vm.showProductId = true;
        vm.showPrice = true;
        vm.buttonClicked = false;
        vm.buttonText = vm.buttonClicked ? 'Save/Cancel' : 'Edit';

        vm.editCard = function () {
            vm.buttonClicked = !vm.buttonClicked;
            vm.buttonText = vm.buttonClicked ? 'Save/Cancel' : 'Edit';
            vm.showImageUrl = !vm.showImageUrl;
            vm.showHeader = !vm.showHeader;
            vm.showProductId = !vm.showProductId;
            vm.showPrice = !vm.showPrice;

            vm.product.image = vm.productImgUrl ? vm.productImgUrl : vm.product.image;
            vm.product.name = vm.productTitle ? vm.productTitle : vm.product.name;
            vm.product.productId = vm.productId ? vm.productId : vm.product.productId;
            vm.product.price = vm.productPrice ? vm.productPrice : vm.product.price;
            //TODO: Add validation to this setter.
            vm.product.$id = vm.productId ? vm.productId : vm.product.productId;

            if (vm.productImgUrl || vm.productTitle || vm.productId || vm.productPrice) {
                switch (vm.apcProdRow) {
                    case "1":
                        switch(vm.activeArea) {
                            case 0:
                                jProductGroup1Data.Row1Group2.$save(vm.product);
                                break;
                            case 1:
                                jProductGroup1Data.Row1Group3.$save(vm.product);
                                break;
                            case 2:
                                jProductGroup1Data.Row1Group4.$save(vm.product);
                                break;
                            default:
                                console.log("ERROR: unable to save to correct db node");
                        }                        break;
                    case "2":
                        switch(vm.activeArea) {
                            case 0:
                                jProductGroup1Data.Row2Group2.$save(vm.product);
                                break;
                            case 1:
                                jProductGroup1Data.Row2Group3.$save(vm.product);
                                break;
                            case 2:
                                jProductGroup1Data.Row2Group4.$save(vm.product);
                                break;
                            default:
                                console.log("ERROR: unable to save to correct db node");
                        }
                        break;
                    case "3":
                        switch(vm.activeArea) {
                            case 0:
                                jProductGroup1Data.Row3Group2.$save(vm.product);
                                break;
                            case 1:
                                jProductGroup1Data.Row3Group3.$save(vm.product);
                                break;
                            case 2:
                                jProductGroup1Data.Row3Group4.$save(vm.product);
                                break;
                            default:
                                console.log("ERROR: unable to save to correct db node");
                        }
                        break;
                    case "4":
                        switch(vm.activeArea) {
                            case 0:
                                jProductGroup1Data.Row4Group2.$save(vm.product);
                                break;
                            case 1:
                                jProductGroup1Data.Row4Group3.$save(vm.product);
                                break;
                            case 2:
                                jProductGroup1Data.Row4Group4.$save(vm.product);
                                break;
                            default:
                                console.log("ERROR: unable to save to correct db node");
                        }
                        break;
                    default:
                        console.log("ERROR SAVING DATA! Check the data service.");
                }
            }
        };

    }
})();