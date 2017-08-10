angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.descriptionVal = "这是controlller定义的变量值,通过数据双向绑定展示在view层";


  $scope.listData = [{
    id:'1',
    name:'王凯'
  },{
    id:'3',
    name:'林俊杰'
  },{
      id:'2',
      name:'周杰伦'
    }]

})

.controller('ChatsCtrl', function($scope, Chats) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.listData = [{
    id:'1',
    name:'小二'
  },{
    id:'3',
    name:'小三'
  },{
    id:'2',
    name:'小四'
  }]

  $scope.settings = {
    enableFriends: true
  };
});
