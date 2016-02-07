(function () {
    'use strict';

    angular
        .module('eliteApp')
        .controller('TeamDetailCtrl', ['$stateParams', 'eliteApi', TeamDetailCtrl]);

    function TeamDetailCtrl($stateParams, eliteApi) {
        var vm = this;

        vm.teamId = Number($stateParams.id);

        var team;
        var found = false;
        var divTeams = [];
        var data = eliteApi.getLeagueData();

        // var team = _.chain(divTeams)
        //             .flatten(data.teams)
        //             .find({"id": vm.teamId})
        //             .value();

        // get every division team
        for(var i = 0; i < data.teams.length; i++) {
            divTeams.push(data.teams[i].divisionTeams)
        }

        // get team object from division
        for(var j = 0; j < divTeams.length; j++) {
            for(var k = 0; k < divTeams[j].length; k++) {
                if(divTeams[j][k].id === vm.teamId) {
                    team = divTeams[j][k];
                    found = true;
                }
            }
        }

        vm.teamName = team.name;
        console.log('team: ', team);

        vm.games = _.chain(data.games)
                    .filter(isTeamInGame)
                    .map(function(item) {
                        var isTeam1 = (item.team1Id === vm.teamId ? true : false);
                        var opponentName = isTeam1 ? item.team2 : item.team1;
                        var scoreDisplay = getScoreDisplay(isTeam1, item.team1Score);
                        return {
                            gameId: item.id,
                            opponent: opponentName,
                            time: item.time,
                            location: item.location,
                            locationUrl: item.locationUrl,
                            scoreDisplay: scoreDisplay,
                            homeAway: (isTeam1 ? "vs" : "at")
                        };
                    })
                    .value();

        console.log('vm.games: ', vm.games);
        function isTeamInGame (item) {
            return item.team1Id === vm.teamId || item.team2Id === vm.teamId;
        }

        function getScoreDisplay (isTeam1, team1Score, team2Score) {
            if (team1Score && team2Score) {
                var teamScore = (isTeam1 ? team1Score : team2Score);
                var opponentScore = (isTeam1 ? team2Score : team1Score);
                var winIndicator = teamScore > opponentScore ? "W: " : "L: ";
                return winIndicator + teamScore + "-" + opponentScore;
            } else {
                return "";
            }
        }
    }
})();