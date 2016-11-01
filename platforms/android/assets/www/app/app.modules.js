angular
  .module('cesmacApp', [
    'ionic',
    'app.run',
    'app.routes',
    'app.constants',
    'auth.service',

    // app views modules
    'auth.login.controller',
    'main.controller'
  ])