(function(){

    let app = angular.module('store', ['store-directives']);

    app.controller('StoreController', ['$http', function($http){
        let s = this;
        s.products = [];

        $http.get('js/store-products.json').then(function(data){
            console.log(data);
            s.products = data.data;
        })
    }]);

})();
