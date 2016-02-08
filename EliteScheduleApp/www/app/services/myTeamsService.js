(function () {
    'use strict';

    angular
        .module('eliteApp')
        .factory('myTeamsService', ['CacheFactory', myTeamsService]);

    function myTeamsService(CacheFactory) {
        var self = this;

        self.myTeamsCache = CacheFactory.get("myTeamsCache");

        function followTeam(team) {
            self.myTeamsCache.put(team.id, team);
        }

        function unfollowTeam(teamId) {
            self.myTeamsCache.remove(teamId.toString());
        }

        function getFollowedTeams() {
            var team;
            var teams = [];
            var keys = self.myTeamsCache.keys();
            for(var i = 0; i < keys.length; i++) {
                team = self.myTeamsCache.get(keys[i]);
                teams.push(team);
            }
            return teams;
        }

        function isFollowingTeam(teamId) {
            var team = self.myTeamsCache.get(teamId);
            return team;
        }

        return {
            followTeam: followTeam,
            unfollowTeam: unfollowTeam,
            getFollowedTeams: getFollowedTeams,
            isFollowingTeam: isFollowingTeam
        }
    }
})();
