'use strict';


angular.module('sgHackathonApp')
    .controller('LoginCtrl', function ($rootScope, $scope, $mdBottomSheet, $mdDialog, $location, $timeout) {

        $scope.Login = function() {
            $location.url('/');
        };
    });


angular.module('sgHackathonApp')
    .controller('HomeCtrl', function ($rootScope, $scope, $location, $timeout) {

        $scope.goTo = function(path, cardName) {
            jQuery('#cards').animate({
                left: -2000
            }, 1000);
            $timeout(function() {
                $location.url('/' + path + '?card=' + cardName);
            }, 1000);
        };

        $rootScope.categories = [
            {
                "name": "Bancaire",
                "count": 4,
                "icon": "fa-bank",
                "newDocs": 1,
                "newCategory": false
            },
            {
                "name": "Santé",
                "count": 12,
                "icon": "fa-stethoscope",
                "newDocs": 2,
                "newCategory": false
            },
            {
                "name": "Habitation",
                "count": 21,
                "icon": "fa-home",
                "newDocs": 0,
                "newCategory": false
            },
            {
                "name": "Transports",
                "count": 5,
                "icon": "fa-space-shuttle",
                "newDocs": 0,
                "newCategory": false
            },
            {
                "name": "Administratif",
                "count": 123,
                "icon": "fa-building",
                "newDocs": 0,
                "newCategory": false
            },
            {
                "name": "Loisirs",
                "count": 27,
                "icon": "fa-soccer-ball-o",
                "newDocs": 1,
                "newCategory": false
            }
        ];


    }
);





angular.module('sgHackathonApp')
    .controller('MainCtrl', function ($rootScope, $scope, $mdBottomSheet, $mdDialog, $location, $timeout) {

        $scope.goToHome = function() {
            $location.url('/');
        };

        $scope.whereIam = function() {
            return $location.path();
        };

        $scope.showListBottomSheet = function($event) {
            $mdBottomSheet.show({
                templateUrl: 'views/bottom-menu.template.html',
                controller: 'BottomCtrl',
                targetEvent: $event
            });
        };

        $scope.dialogBasic = function(ev) {
            $mdDialog.show({
                templateUrl: 'views/vocale.template.html',
                targetEvent: ev,
                controller: 'SearchPopupCtrl'
            });
        };


    });



angular.module('sgHackathonApp')
    .controller('BottomCtrl', function ($rootScope, $scope, $mdDialog, $location) {

        $scope.addCategory = function(ev) {
            $mdDialog.show({
                templateUrl: 'views/new-category.template.html',
                targetEvent: ev,
                controller: 'AddCategoryCtrl'
            });
        };

});

angular.module('sgHackathonApp')
  .controller('ListCtrl', function ($rootScope, $scope, $mdDialog, $location) {

        var card = $location.search().card;
        var predefined = card === 'Bancaire' || card === 'Santé' || card === 'Habitation'
                      || card === 'Transports' || card === 'Administratif' || card === 'Loisirs';

        $scope.catName = card;
        $scope.preview = null;

        $scope.previewDoc = function(doc) {
            $scope.preview = doc;
        };

        $rootScope.documents = [];
        if (predefined) {
            $rootScope.documents = [
                {
                    "name": "Prêt Expresso",
                    "date": "18/11/2014",
                    "image": "images/imageAssurance.png",
                    "document": "documents/assurance.pdf",
                    "ext": "pdf",
                    "newDoc": true
                },
                {
                    "name": "Livret A",
                    "date": "02/03/2014",
                    "image": "images/imageLivretA.png",
                    "document": "documents/livretA.pdf",
                    "ext": "pdf",
                    "newDoc": false
                },
                {
                    "name": "Mon document",
                    "date": "17/11/2014",
                    "image": "images/yeoman.png",
                    "document": "images/yeoman.png",
                    "ext": "doc",
                    "newDoc": false
                },
                {
                    "name": "Mes comptes",
                    "date": "15/11/2014",
                    "image": "images/yeoman.png",
                    "document": "images/yeoman.png",
                    "ext": "xls",
                    "newDoc": false
                }
            ];
        }



        $scope.dialogBasic = function(ev) {
            $mdDialog.show({
                templateUrl: 'views/popup.template.html',
                targetEvent: ev,
                controller: 'DialogController'
            });
        };

        $scope.hide = function() {
            $mdDialog.hide();
        };

    });


angular.module('sgHackathonApp')
    .controller('DialogController', function ($rootScope, $scope, $mdDialog, $timeout) {

        $scope.hide = function() {
            $mdDialog.hide();
        };

        $scope.showCapture = false;
        $scope.documentName = "";

        $scope.addDoc = function() {
            if ($scope.documentName == '') {
                $scope.documentName = "Nouveau Document";
            }
            $scope.showCapture = true;
            $timeout(function() {
                $rootScope.documents.push({
                    "name": $scope.documentName,
                    "date": "18/11/2014",
                    "image": "",
                    "ext": "png",
                    "newDoc": true
                });
                $mdDialog.hide();
            }, 2000);
        };




    });



angular.module('sgHackathonApp')
    .controller('AddCategoryCtrl', function ($rootScope, $scope, $mdDialog, $mdBottomSheet) {

        $scope.hide = function() {
            $mdDialog.hide();
        };

        $scope.categoryName = "";

        $scope.validate = function() {
            console.log('ADD category %s...', $scope.categoryName);
            $rootScope.categories.push({
                "name": $scope.categoryName,
                "count": 0,
                "icon": "fa-car",
                "newDocs": 0,
                "newCategory": true
            });
            $mdBottomSheet.hide();
            $mdDialog.hide();
        };

    });



angular.module('sgHackathonApp')
    .controller('SearchPopupCtrl', function ($rootScope, $scope, $mdDialog, $timeout, $location) {

        $scope.hide = function() {
            $mdDialog.hide();
        };

        $scope.displayResult = false;

        $timeout(function() {
            $scope.displayResult = true;
        }, 3000);

        $timeout(function() {
            $mdDialog.hide();
            $location.url('/search');
        }, 5000);


    });


angular.module('sgHackathonApp')
    .controller('SearchCtrl', function ($scope) {

    $scope.results = [
        {
            "name": "Facture EDF - 10/2014",
            "date": "04/11/2014",
            "image": "images/edf.jpg",
            "document": "documents/edf.pdf",
            "ext": "pdf"
        },
        {
            "name": "Facture EDF - 09/2014",
            "date": "05/10/2014",
            "image": "images/edf.jpg",
            "document": "documents/edf.pdf",
            "ext": "pdf"
        }
    ]

});
