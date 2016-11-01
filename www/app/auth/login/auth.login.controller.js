angular
  .module('auth.login.controller', [])
  .controller('LoginController', LoginController)

function LoginController($log, $state) {
  var vm = this;
  $log.log('Login Page works!');
}