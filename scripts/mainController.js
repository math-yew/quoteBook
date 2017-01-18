angular.module('quoteBook')
.controller('mainController', function($scope, mainService){

$scope.test = "this is a quote controller test";

$scope.quotes = mainService.quotes();

$scope.addData = mainService.addData;

$scope.removeData = mainService.removeData;


})
