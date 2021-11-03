angular.
  module('auth').
  component('login', {
    templateUrl: 'app/auth/login.template.html',
    controller: function($scope, $http, $location) {
      var self = this;

      self.onClick = function () {
        self.email = $scope.email;
        self.password = $scope.password;
        self.remember = $scope.remember;
        if (!(self.email && self.password)) {
          return;
        } 
        console.log('email/password is ' + self.email + '/' + self.password + ' ' + self.remember);
        
        $http({
          method: 'POST', 
          url: './api/login.json'}).
        then(
          function success(response) {
            console.log('http request successful');
            console.log($location);
            $location.path('/home');
          }, 
          function error(response) {
            console.log('http request not successful');
          }
        )
      }
      self.onEnter = function onEnter($event) {
        e = $event;
        if(e.keyCode == 13) {
          e.preventDefault();
          self.onClick();
        }
      } 
    }
  });