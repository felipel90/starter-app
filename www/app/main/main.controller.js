angular
  .module('main.controller', [])
  .controller('MainController', MainController)

function MainController($log) {
  var vm = this;
  $log.log('Main page!');
}
