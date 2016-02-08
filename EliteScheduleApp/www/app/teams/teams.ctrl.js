(function () {
    'use strict';

    angular
        .module('eliteApp')
        .controller('TeamsCtrl', ['eliteApi', TeamsCtrl]);

    function TeamsCtrl(eliteApi) {
        var vm = this;

        eliteApi.getLeagueData(function(data) {
            console.log("JOJOJO: ", data);
            vm.teams = data.teams;
        });
    }
})();
