
var app = angular.module('contractKiller', ['ngSanitize']);

app.controller('ContractController', function($scope, $sanitize) {
  $scope.contractorName = '';
  $scope.contractorAddress = '';
  $scope.clientName = '';
  $scope.clientAddress = '';
  $scope.price = '';
  $scope.jurisdiction = '';
  $scope.paymentSchedule = '';
  $scope.paymentMethod = '';
  $scope.overDuePenalty = '';
  $scope.rateType = 'hourly';
  $scope.date = '';
  
  $scope.print = function() {
    window.print();
  }
});
