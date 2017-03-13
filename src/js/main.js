import angular from 'angular';

import CounterController from './controllers/counter';

angular
  .module('listular', [])
  .controller('CounterController', CounterController);
