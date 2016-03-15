describe('ContactController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('should filter all female contacts', function () {
        var $scope = {};
        $controller('ContactController as vm', {$scope: $scope});

         $scope.vm.getFemaleContacts();
 
        expect($scope.vm.filteredList.length).toBe(71);
    });

    it('should filter all ppl from Belfast', function () {
        var $scope = {};
        $controller('ContactController as vm', {$scope: $scope});

         $scope.vm.getPplFromBelfast();
 
        expect($scope.vm.filteredList.length).toBe(5);
    });

});
