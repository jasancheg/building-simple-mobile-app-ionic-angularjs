(function () {
    'use strict';

    angular
        .module('eliteApp')
        .factory('eliteApi', ['$http', '$q', '$ionicLoading', 'CacheFactory', eliteApi])
    function eliteApi($http, $q, $ionicLoading, CacheFactory) {
        var currentLeagueId;

        self.leaguesCache = CacheFactory.get("leaguesCache");
        self.leagueDataCache = CacheFactory.get("leagueDataCache");

        function getLeagues() {
            var deferred = $q.defer();
            var cacheKey = 'leagues';
            var leaguesData = self.leaguesCache.get(cacheKey);

            if(leaguesData) {
                console.log("Found data inside cache", leaguesData);
                deferred.resolve(leaguesData);
            } else {
                $ionicLoading.show({template: 'Loading...'});
                $http
                    .get("http://elite-schedule.net/api/leaguedata")
                    .success(function(data) {
                        $ionicLoading.hide();
                        console.log("Received data via HTTP");
                        self.leaguesCache.put(cacheKey, data);
                        deferred.resolve(data);
                    })
                    .error(function() {
                        $ionicLoading.hide();
                        console.log("Error while making HTTP call.");
                        deferred.reject();
                    });
            }

            return deferred.promise;
        }

        function getLeagueData() {
            var deferred = $q.defer();
            var cacheKey = 'leagueData-' + currentLeagueId;
            var leagueData = self.leagueDataCache.get(cacheKey);

            if(leagueData) {
                console.log("Found data in cache", leagueData);
                deferred.resolve(leagueData);
            } else {
                $ionicLoading.show({template: 'Loading...'});
                $http
                    .get("http://elite-schedule.net/api/leaguedata/" + currentLeagueId)
                    .success(function(data, status) {
                        $ionicLoading.hide();
                        console.log("Received schedule data via HTTP.", data, status);
                        self.leagueDataCache.put(cacheKey, data);
                        deferred.resolve(data);
                    })
                    .error(function() {
                        $ionicLoading.hide();
                        console.log("Error while making HTTP call.");
                        deferred.reject();
                    });
            }
            return deferred.promise;
        }

        function setLeagueId(leagueId) {
            currentLeagueId = leagueId;
        }

        return {
            getLeagues: getLeagues,
            getLeagueData: getLeagueData,
            setLeagueId: setLeagueId
        }
    }
})();
