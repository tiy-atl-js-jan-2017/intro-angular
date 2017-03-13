import angular from 'angular';

import GreetingController from './controllers/greeting';

angular
  .module('listular', [])
  .controller('GreetingController', GreetingController);
