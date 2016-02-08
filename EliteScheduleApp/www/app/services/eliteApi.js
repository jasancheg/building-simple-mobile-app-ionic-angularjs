(function () {
    'use strict';

    angular
        .module('eliteApp')
        .factory('eliteApi', ['$http', '$q', '$ionicLoading', 'CacheFactory', eliteApi]);

    function eliteApi($http, $q, $ionicLoading, CacheFactory) {

        self.leaguesCache = CacheFactory.get("leaguesCache");
        self.leagueDataCache = CacheFactory.get("leagueDataCache");
        self.leaguesCache.setOptions({
            onExpire: function (key, value) {
                getLeagues()
                    .then(function() {
                        console.log("Leagues cache was automatically refreshed.", new Date());
                    }, function() {
                        console.log("Error getting data. Puting expired item back in the cache.", new Date());
                        self.leaguesCache.put(key, value);
                    })
            }
        });
        self.leagueDataCache.setOptions({
            onExpire: function (key, value) {
                getLeagueData()
                    .then(function() {
                        console.log("League Data Cache was automatically refreshed.", new Date());
                    }, function() {
                        console.log("Error getting data. Puting expired item back in the cache.", new Date());
                        self.leagueDataCache.put(key, value);
                    })
            }
        });
        self.staticCache = CacheFactory.get("staticCache");

        function setLeagueId(leagueId) {
            self.staticCache.put("currentLeagueId", leagueId);
        }

        function getLeagueId() {
            return self.staticCache.get("currentLeagueId");
        }

        function getLeagues() {
            var deferred = $q.defer();
            var cacheKey = 'leagues';
            var leaguesData = self.leaguesCache.get(cacheKey);

            if(leaguesData) {
                console.log("Found data inside cache", leaguesData);
                deferred.resolve(leaguesData);
            } else {
                $ionicLoading.show({template: 'Loading...'});

                var options = {
                    headers: {
                        'Access-Control-Allow-Origin' : '*',
                        'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                };

                $http
                    .get("http://elite-schedule.net/api/leaguedata", options)
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

        function getLeagueData(forceRefresh) {
            if(typeof forceRefresh === 'undefined') {
                forceRefresh = false;
            }

            var deferred = $q.defer();
            var cacheKey = 'leagueData-' + getLeagueId();
            var leagueData = null;

            if(!forceRefresh) {
                leagueData = self.leagueDataCache.get(cacheKey);
            }

            if(leagueData) {
                console.log("Found data in cache", leagueData);
                deferred.resolve(leagueData);
            } else {
                $ionicLoading.show({template: 'Loading...'});
                $http
                    .get("http://elite-schedule.net/api/leaguedata/" + getLeagueId())
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

        return {
            getLeagues: getLeagues,
            getLeagueData: getLeagueData,
            setLeagueId: setLeagueId
        }
    }
})();
