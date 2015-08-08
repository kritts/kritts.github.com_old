'use strict';

describe('Controller: ICTDCtrl', function () {

  // load the controller's module
  beforeEach(module('dsilvaApp'));

  var ICTDCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ICTDCtrl = $controller('ICTDCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
