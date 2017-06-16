(function(){

    let app = angular.module('store', []);

    let gem = {
        name: 'Dodecahedron',
        price: 295,
        description: 'lorem ipsum dolo',
        canPurchase: false,
        soldOut: true,
        images: [
            {
                full: '1.png',
                thumb: '1.png'
            }
        ]
    }

    let gems = [
        {
            name: 'Gema Dodecaedro',
            price: 295,
            description: 'Hermosa gema con forma de dodecaedro',
            canPurchase: false,
            soldOut: true,
            images: [
                {
                    full: 'gem-01.gif',
                    thumb: 'gem-01.gif'
                }
            ],
            reviews: [
                {
                    stars: 5,
                    body: 'I love this product!!!',
                    author: 'alonsosalcido@gmail.com'
                },
                {
                    stars: 4,
                    body: 'Me gusta este producto',
                    author: 'oscar_molina100@msn.com'
                },
                {
                    stars: 1,
                    body: 'Odio este producto',
                    author: 'jesus@gmail.com'
                }
            ]
        },
        {
            name: 'Gema Pentagonal ',
            price: 365,
            description: 'Gema con forma de pentágono',
            canPurchase: false,
            soldOut: false,
            images: [
                {
                    full: 'gem-02.gif',
                    thumb: 'gem-02.gif'
                }
            ],
            reviews: [
                {
                    stars: 5,
                    body: 'I love this product!!!',
                    author: 'alonsosalcido@gmail.com'
                },
                {
                    stars: 4,
                    body: 'Me gusta este producto',
                    author: 'oscar_molina100@msn.com'
                },
                {
                    stars: 1,
                    body: 'Odio este producto',
                    author: 'jesus@gmail.com'
                }
            ]
        },
        {
            name: 'Gema Prisma',
            price: 895,
            description: 'Bella piedra en forma de Prisma',
            canPurchase: false,
            soldOut: false,
            images: [
                {
                    full: 'gem-03.gif',
                    thumb: 'gem-03.gif'
                }
            ],
            reviews: [
                {
                    stars: 5,
                    body: 'I love this product!!!',
                    author: 'alonsosalcido@gmail.com'
                },
                {
                    stars: 4,
                    body: 'Me gusta este producto',
                    author: 'oscar_molina100@msn.com'
                },
                {
                    stars: 1,
                    body: 'Odio este producto',
                    author: 'jesus@gmail.com'
                }
            ]
        } 
    ]

    app.controller('StoreController', function(){
        this.products = gems;
    });

    app.controller('ReviewController', function(){
        this.review = {};

        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        }
    });

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
                
            },
            controllerAs: 'r'
        }
    })

})();
