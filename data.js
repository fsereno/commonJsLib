function data(app) {

    app.factory("Data", ['$http', 'toaster', '$location', function ($http, toaster, $q, $location) {

        var serviceBase = 'server/v1/';

        var obj = {};

        obj.toast = function (data) {
            toaster.pop(data.status, "", data.message, 10000, 'trustedHtml');
        };
        // obj.get = function (q) {
        //     return $http.get(serviceBase + q).then(function (results) {
        //         return results.data;
        //     });
        // };
        obj.post = function (q, object) {
            return $http.post(serviceBase + q, object).then(function (results) {
                return results.data;
            });
        };
        // obj.put = function (q, object) {
        //     return $http.put(serviceBase + q, object).then(function (results) {
        //         return results.data;
        //     });
        // };
        // obj.delete = function (q) {
        //     return $http.delete(serviceBase + q).then(function (results) {
        //         return results.data;
        //     });
        // };
        return obj;
    
    }]);

}

module.exports = data;
