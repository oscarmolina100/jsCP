(function(){
    
    var app = angular.module('store-directives', []);

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
        };
    });

    app.directive('productGallery', function(){
        return{
            restrict: 'E',
            templateUrl: 'product-gallery.html',
            controller: function(){
                this.current = 0;
                this.setCurrent = function(imageNumber){
                    this.current = imageNumber || 0;
                };
            },
            controllerAs: 'g'
        };
    });

})();