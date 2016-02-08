angular
    .module('eliteApp', ['ionic', 'angular-cache'])

    .run(function($ionicPlatform, CacheFactory) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar ab )
            // // For form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                // org.apche.cordova.statusbar required
                StatusBar.styleDefault();
            }
            CacheFactory("leagueDataCache", {storageMode: "localStorage", maxAge: 1000000, deleteOnExpire: "aggressive"});
            CacheFactory("leaguesCache", {storageMode: "localStorage", maxAge: 1000000, deleteOnExpire: "aggressive"});
            CacheFactory("myTeamsCache", {storageMode: "localStorage"});
            CacheFactory("staticCache", {storageMode: "localStorage"});
        });
    })

    .config(function($ionicConfigProvider){
        $ionicConfigProvider.tabs.position('bottom');
        $ionicConfigProvider.navBar.alignTitle('center')
    })

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                abstract: true,
                url: '/home',
                templateUrl: 'app/home/home.html'
            })
            .state('home.myteams', {
                url: '/myteams',
                views: {
                    "tab-myteams": {
                        templateUrl: 'app/home/myteams/myteams.html'
                    }
                }
            })
            .state('home.leagues', {
                url: '/leagues',
                views: {
                    "tab-leagues": {
                        templateUrl: 'app/home/leagues/leagues.html'
                    }
                }
            })
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'app/layout/menu-layout.html'
            })
            .state('app.teams', {
                url: '/teams',
                views: {
                    'mainContent': {
                        templateUrl: 'app/teams/teams.html'
                    }
                }
            })
            .state('app.team-detail', {
                url: '/teams/:id',
                views: {
                    'mainContent': {
                        templateUrl: 'app/teams/team-detail.html'
                    }
                }
            })
            .state('app.game', {
                url: '/game/:id',
                views: {
                    'mainContent': {
                        templateUrl: 'app/game/game.html'
                    }
                }
            })
            .state('app.standings', {
                url: '/standings',
                views: {
                    'mainContent': {
                        templateUrl: 'app/standings/standings.html'
                    }
                }
            })
            .state('app.locations', {
                url: '/locations',
                views: {
                    'mainContent': {
                        templateUrl: 'app/locations/locations.html'
                    }
                }
            })
            .state('app.rules', {
                url: '/rules',
                views: {
                    'mainContent': {
                        templateUrl: 'app/rules/rules.html'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/home/leagues');
    });