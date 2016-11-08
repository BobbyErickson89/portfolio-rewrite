var portfolioApp = angular.module('portfolioApp', []);

portfolioApp.controller('ProjectListController', function ProjectListController($scope){
  $scope.projects = [
    {
      title: 'Health Accountable',
      description: 'desc 1'
    }, {
      title: 'Memory Game',
      description: 'desc 2',
    }, {
      title: 'Hangman',
      description: 'desc 3'
    }
  ];
});
