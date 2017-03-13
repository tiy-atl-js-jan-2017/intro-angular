function GreetingController ($scope) {
  console.log("Welcome to GreetingController");
  console.log($scope);
}

GreetingController.$inject = ['$scope'];

export default GreetingController;
