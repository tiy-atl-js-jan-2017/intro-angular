function CocktailController ($scope) {
  console.log("Inside cocktail controller");
  $scope.cocktails = [];

  $scope.addCocktail = function (cocktail) {
    cocktail.id = $scope.cocktails.length + 1;
    $scope.cocktails.push(cocktail);
    console.log($scope.cocktails);
  };
};

CocktailController.$inject = ['$scope'];

export default CocktailController;
