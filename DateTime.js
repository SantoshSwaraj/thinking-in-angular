var module = angular.module("current-date", []); // To create a module
module.controller("MainController", Main);
function Main($scope){
    $scope.udateDateAndTime = function(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
    
        var yyyy = today.getFullYear();
        if(dd<10){
             dd='0'+dd;
        } 
        if(mm<10){
            mm='0'+mm;
        } 
        var today = dd+'/'+mm+'/'+yyyy;
        $scope.currentDate = today;
    
        var currentTime = new Date();
        $scope.timeString = currentTime.toTimeString();
    }
}