'use strict';



angular.module('sgHackathonApp')
    .controller('HomeCtrl', function ($scope, $location) {

        $scope.goTo = function(path) {
            $location.url('/' + path);
        }


    }
);





angular.module('sgHackathonApp')
    .controller('MainCtrl', function ($scope, $mdBottomSheet, $location) {

        $scope.goToHome = function() {
            $location.url('/');
        };

        $scope.where = function() {
            var url = $location.url();
            if (url == '/list') {
                return 'bancaire';
            }
        };

        $scope.items = [
            { name: 'Share', icon: 'share' },
            { name: 'Upload', icon: 'upload' },
            { name: 'Copy', icon: 'copy' },
            { name: 'Print', icon: 'print' },
        ];

        $scope.showListBottomSheet = function($event) {
            $scope.alert = '';
            $mdBottomSheet.show({
                templateUrl: 'views/bottom-menu.template.html',
                controller: 'MainCtrl',
                targetEvent: $event
            }).then(function(clickedItem) {
                $scope.alert = clickedItem.name + ' clicked!';
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
            "name": "Contrat assurance vie",
            "date": "01/02/2013",
            "image": "images/yeoman.png",
            "newDoc": false
        },
        {
            "name": "Livret A",
            "date": "02/03/2014",
            "image": "toto",
            "newDoc": false
        },
        {
            "name": "Test",
            "date": "17/11/2014",
            "image": "tata",
            "newDoc": false
        },
        {
            "name": "Une image",
            "date": "15/11/2014",
            "image": "titi",
            "newDoc": true
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
    .controller('DialogController', function ($rootScope, $scope, $mdDialog) {

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

});