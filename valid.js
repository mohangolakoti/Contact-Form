var app = angular.module("myApp", []);
app.controller("formCtrl", function ($scope, $http) {
        $scope.sno = 6;
        $scope.name = 'sreepreethi';
        // $scope.dob = 11-11-2004;
        $scope.eml = 'srel@gmail.com';
        $scope.c_num = 1234567897;
        //$scope.c_num = /^\+?\d{10}$/;
        // $scope.eml = /^[^\s@]+@[^\s@]+\.[^\s@]{,}$/;

        /* $scope.insertData = function () {
                        $http.post("insert.php", {
                                'sno': $scope.sno,
                                'name': $scope.name,
                                'dob': $scope.dob,
                                'eml': $scope.eml,
                                'c_num': $scope.c_num
                        })
        
                                .success(function (data, status, headers, config) {
                                        console.log("Data Inserted Successfully");
                                });
                } */

        Date.prototype.yyyymmdd = function () {
                var mm = this.getMonth() + 1; // getMonth() is zero-based
                var dd = this.getDate();

                return [this.getFullYear(),
                (mm > 9 ? '' : '0') + mm,
                (dd > 9 ? '' : '0') + dd
                ].join('');
        };

        Object.toparams = function ObjecttoParams(obj) {
                var p = [];
                for (var key in obj) {
                        p.push(key + '=' + encodeURIComponent(obj[key]));
                }
                return p.join('&');
        };


        $scope.insertdata = function () {
                var formData = Object.toparams({ 'sno': $scope.sno, 'name': $scope.name, 'dob': $scope.dob.yyyymmdd(), 'eml': $scope.eml, 'c_num': $scope.c_num });
                $http({
                        method: 'POST',
                        url: 'insert.php',
                        data: formData,
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        transformRequest: angular.identity
                }).then(function successcallback(response) {
                        alert(response.data);
                        return 1;
                }, function errorCallback(response) {
                        return 0;
                });
        };
});