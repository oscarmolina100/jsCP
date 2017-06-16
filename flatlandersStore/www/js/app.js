(function(){

    let app = angular.module('store', []);

    app.controller('StoreController', ['$http', function($http){
        let s = this;
        s.products = [];

        $http.get('js/store-products.json').then(function(data){
            console.log(data);
            s.products = data.data;
        })
    }]);

    app.directive('productTitle', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-title.html'
        };
    });

    app.directive('productPanels', function(){
        return{
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function(){
                this.tab = 1;

                this.selectTab = function(setTab){
                    this.tab = setTab; 
                }

                this.isSelected = function(checkTab){
                    return this.tab === checkTab;
                }
            },
            controllerAs: 'p'
        };
    });

    app.directive('productReviews', function(){
        return{
            restrict: 'E',
            templateUrl: 'product-reviews.html',
            controller: function(){
                this.review = {};

                this.addReview = function(product){
                    product.reviews.push(this.review);
                    this.review = {};
                }
            },
            controllerAs: 'r'
        }
    })

})();
