(function () {
    'use strict';

    angular
        .module('eliteApp')
        .controller('MyTeamsCtrl', ['$state', 'eliteApi', 'myTeamsService', MyTeamsCtrl]);

    function MyTeamsCtrl($state, eliteApi, myTeamsService) {
        var vm = this;

        vm.myTeams = myTeamsService.getFollowedTeams();
        vm.goToTeam = function(team) {
            eliteApi.setLeagueId(team.leagueId);
            $state.go('app.team-detail', {id: team.id});
        }
    }
})();
