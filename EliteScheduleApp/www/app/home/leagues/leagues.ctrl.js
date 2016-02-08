(function () {
    'use strict';

    angular
        .module('eliteApp')
        .controller('LeaguesCtrl', ['eliteApi', '$state', LeaguesCtrl]);

    function LeaguesCtrl(eliteApi, $state) {
        var vm = this;
        eliteApi.getLeagues(function(data) {
            vm.leagues = data;
        });

        vm.selectLeague = function(leagueId) {
            eliteApi.setLeagueId(id);
            $state.go("app.teams");
        };
    }
})();

