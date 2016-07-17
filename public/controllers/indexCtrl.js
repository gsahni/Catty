//controller to display detail profile of a doctor
index.controller('indexCtrl',function($scope,$http){

    var link = '/cats';

    $http({
            method : 'get',
            url : link
        }).then(function(response) {
                $scope.obj=(JSON.parse(response.data));

    });    
})
