import angular from 'angular';

import GreetingController from './controllers/greeting';
import CocktailController from './controllers/cocktail';

angular
  .module('listular', [])
  .controller('GreetingController', GreetingController)
  .controller('CocktailController', CocktailController);
