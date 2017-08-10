angular.module('starter.expanderModule', [])
.directive('hmsDatalist', function() {
  return {
    restrict : 'EA',
    scope : {
      hmsDataOrigin:'='
    },
    template :'<div ng-repeat="list in datalist track by $index">' +
      '{{list.name}}'
    +'</div>',
    link : function(scope, element, attrs) {
      scope.datalist = scope.hmsDataOrigin;
    }
  }
});
