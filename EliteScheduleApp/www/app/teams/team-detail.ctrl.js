(function () {
    'use strict';

    angular
        .module('eliteApp')
        .controller('TeamDetailCtrl', ['$stateParams', TeamDetailCtrl]);

    function TeamDetailCtrl($stateParams) {
        var vm = this;
        vm.stateId = $stateParams.id;
        console.log('$stateParams', $stateParams);
    }
})();