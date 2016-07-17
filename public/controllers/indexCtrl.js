//controller to display detail profile of a doctor
index.controller('indexCtrl',function($scope,$http){

    var link = 'http://127.0.0.1:8085/cats';

    $http({
            method : 'get',
            url : link
        }).then(function(response) {
                $scope.obj=(JSON.parse(response.data));

    });    
})
