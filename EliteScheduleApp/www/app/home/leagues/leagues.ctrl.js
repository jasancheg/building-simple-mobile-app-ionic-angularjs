(function () {
    'use strict';

    angular
        .module('eliteApp')
        .controller('LeaguesCtrl', ['eliteApi', '$state', LeaguesCtrl]);

    function LeaguesCtrl(eliteApi, $state) {
        var vm = this;
        vm.leagues = eliteApi.getLeagues();
        vm.leagueData = eliteApi.getLeagueData();

        vm.selectLeague = function(leagueId) {
            // TODO: select correct league
            $state.go("app.teams");
        };
    }
})();

