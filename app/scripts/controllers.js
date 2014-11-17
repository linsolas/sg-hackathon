'use strict';



angular.module('sgHackathonApp')
    .controller('HomeCtrl', function ($scope, $location) {

        $scope.goTo = function(path) {
            $location.url('/' + path);
        }


    }
);





angular.module('sgHackathonApp')
    .controller('MainCtrl', function ($rootScope, $scope, $mdBottomSheet, $mdDialog, $location) {

        $rootScope.showFiat = false;

        $scope.addFiat = function() {
            $rootScope.showFiat = true;
            $mdBottomSheet.hide();
        };

        $scope.goToHome = function() {
            $location.url('/');
        };

        $scope.where = function() {
            return $location.url().substring(1);
        };

        $scope.showListBottomSheet = function($event) {
            $mdBottomSheet.show({
                templateUrl: 'views/bottom-menu.template.html',
                controller: 'MainCtrl',
                targetEvent: $event
            }).then(function(clickedItem) {
            });
        };

        $scope.dialogBasic = function(ev) {
            $mdDialog.show({
                templateUrl: 'views/vocale.template.html',
                targetEvent: ev,
                controller: 'DialogController'
            }).then(function() {
                $scope.alert = 'You said "Okay".';
            }, function() {
                $scope.alert = 'You cancelled the dialog.';
            });
        };


    });

angular.module('sgHackathonApp')
  .controller('ListCtrl', function ($rootScope, $scope, $mdDialog, $mdToast) {

        $scope.preview = null;

        $scope.previewDoc = function(doc) {
            $scope.preview = doc;
        };

        $rootScope.documents = [
        {
            "name": "Contrat assurance",
            "date": "18/11/2014",
            "image": "images/imageAssurance.png",
            "document": "documents/assurance.pdf",
            "newDoc": true
        },
        {
            "name": "Livret A",
            "date": "02/03/2014",
            "image": "images/imageLivretA.png",
            "document": "documents/livretA.pdf",
            "newDoc": false
        },
        {
            "name": "Test",
            "date": "17/11/2014",
            "image": "images/yeoman.png",
            "document": "images/yeoman.png",
            "newDoc": false
        },
        {
            "name": "Une image",
            "date": "15/11/2014",
            "image": "images/yeoman.png",
            "document": "images/yeoman.png",
            "newDoc": false
        }
    ];



        $scope.dialogBasic = function(ev) {
            $mdDialog.show({
                templateUrl: 'views/popup.template.html',
                targetEvent: ev,
                controller: 'DialogController'
            }).then(function() {
                $scope.alert = 'You said "Okay".';
            }, function() {
                $scope.alert = 'You cancelled the dialog.';
            });
        };

        $scope.test = function() {
            $mdToast.show({
                templateUrl: 'views/notif.template.html',
                hideDelay: 5000,
                position: $scope.getToastPosition()
            });
        };


        $scope.getToastPosition = function() {
            return Object.keys($scope.toastPosition)
                .filter(function(pos) { return $scope.toastPosition[pos]; })
                .join(' ');
        };

        $scope.toastPosition = {
            bottom: false,
            top: true,
            left: false,
            right: true
        };

        $scope.hide = function() {
            $mdDialog.hide();
        };

//        $scope.test();


    });


angular.module('sgHackathonApp')
    .controller('DialogController', function ($rootScope, $scope, $mdDialog, $timeout, $location) {

        $scope.hide = function() {
            $mdDialog.hide();
        };

        $scope.addDoc = function(type) {
            $rootScope.documents.push({
                "name": "Nouveau " + type,
                "date": "18/11/2014",
                "image": "",
                "newDoc": true
            });
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



});