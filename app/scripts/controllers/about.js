'use strict';

angular.module('sgHackathonApp')
  .controller('ListCtrl', function ($scope, $mdDialog, $mdToast) {

    $scope.documents = [
        {
            "name": "Relevés",
            "type": "folder",
            "date": null,
            "content": [
                {
                    "name": "Relevé compte courant 10/2014",
                    "type": "PDF",
                    "date": "01/11/2014"
                },
                {
                    "name": "Relevé compte courant 09/2014",
                    "type": "PDF",
                    "date": "01/10/2014"
                }
            ]
        },
        {
            "name": "Contrats",
            "type": "folder",
            "date": null
        },
        {
            "name": "Test",
            "type": "text",
            "date": "17/11/2014"
        },
        {
            "name": "Une image",
            "type": "image",
            "date": "15/11/2014"
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

        $scope.test();


    });


angular.module('sgHackathonApp')
    .controller('DialogController', function ($scope, $mdDialog) {

        $scope.hide = function() {
            $mdDialog.hide();
        };

});