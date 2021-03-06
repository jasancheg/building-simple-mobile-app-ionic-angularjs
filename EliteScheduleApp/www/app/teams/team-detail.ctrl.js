(function () {
    'use strict';

    angular
        .module('eliteApp')
        .controller('TeamDetailCtrl', ['$stateParams', '$ionicPopup', 'eliteApi', 'myTeamsService', TeamDetailCtrl]);

    function TeamDetailCtrl($stateParams, $ionicPopup, eliteApi, myTeamsService) {
        var vm = this;
        var found = false;
        var divTeams = [];
        var divStandings = [];

        vm.teamId = Number($stateParams.id);

        eliteApi.getLeagueData().then(function(data) {
            // get every division standing
            divStandings = flatCollectionByProperty(data.standings, 'divisionStandings');
            vm.teamStanding = getObjectByProperty(divStandings, "teamId", vm.teamId);

            // get every division team
            divTeams = flatCollectionByProperty(data.teams, 'divisionTeams');
            vm.team = getObjectByProperty(divTeams, "id", vm.teamId);
            vm.following = myTeamsService.isFollowingTeam(vm.team.id);

            vm.teamName = vm.team.name;
            vm.games = _.chain(data.games)
                        .filter(isTeamInGame)
                        .map(function(item) {
                            var isTeam1 = (item.team1Id === vm.teamId ? true : false);
                            var opponentName = isTeam1 ? item.team2 : item.team1;
                            var scoreDisplay = getScoreDisplay(isTeam1, item.team1Score, item.team2Score);
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
        });

        vm.toggleFollow = function() {
            console.log('isFollowingTeam', myTeamsService.isFollowingTeam(vm.team.id));
            if(myTeamsService.isFollowingTeam(vm.team.id)) {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Unfollow?',
                    template: 'Are you sureyou want to unfollow?'
                });
                confirmPopup.then(function(res) {
                    if(res) {
                        vm.following = !vm.following;
                        myTeamsService.unfollowTeam(vm.team.id)
                    }
                })
            } else {
                vm.following = !vm.following;
                myTeamsService.followTeam(vm.team)
            }
        }

        function getObjectByProperty(obj, prop, value) {
            // get team object from collection
            for(var j = 0; j < obj.length; j++) {
                for(var k = 0; k < obj[j].length; k++) {
                    if(obj[j][k][prop] === value) {
                        return obj[j][k];
                    }
                }
            }
            return {};
        }

        function flatCollectionByProperty(collection, prop) {
            var newCollection = [];
            for(var m = 0; m < collection.length; m++) {
                newCollection.push(collection[m][prop])
            }
            return newCollection;
        }

        function isTeamInGame (item) {

            return item.team1Id === vm.teamId || item.team2Id === vm.teamId;
        }

        function getScoreDisplay (isTeam1, team1Score, team2Score) {
            if (team1Score && team2Score) {
                var teamScore = (isTeam1 ? team1Score : team2Score);
                var opponentScore = (isTeam1 ? team2Score : team1Score);
                var winIndicator = teamScore > opponentScore ? " W: " : " L: ";
                return winIndicator + teamScore + "-" + opponentScore;
            } else {
                return "";
            }
        }
    }
})();