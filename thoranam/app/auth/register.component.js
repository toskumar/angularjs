angular.
  module('auth').
  component('register', {
    templateUrl: 'app/auth/register.template.html',
    controller: function($scope, $http, $document, $location) {
      var self = this;
      var cPane = 0;

      self.onNext0 = function() {
        console.log($scope);
        console.log($scope.email1);
        self.validate(0);
        self.email1 = $scope.email1;
        self.password1 = $scope.password1;
        self.password2 = $scope.password2;

        f = $document[0].querySelector("#f_reg"+cPane);
        fb_email = angular.element($document[0].querySelector("#fb_email"));
        console.log(self.email1);
        if(!self.email1) {
          fb_email.text("Email is required field");
        }else if(!f.email1.$valid) {
          fb_email.text("Invalid email")
        }
        //self.validate(0, true);

      }

      self.onPrevious = function () {
        if(cPane > 0) {
          p = $document[0].querySelector("#reg"+cPane);
          angular.element(p).removeClass("show");
          cPane--;
          p = $document[0].querySelector("#reg"+cPane);
          angular.element(p).addClass("show");
        }
        if(cPane != 2) {
          p = $document[0].querySelector("#regSubButton");
          angular.element(p).removeClass("show");
        }
      }
      self.onNext = function () {
        if(cPane < 2) {
          self.validate(cPane);
          p = $document[0].querySelector("#reg"+cPane);
          angular.element(p).removeClass("show");
          cPane++;
          p = $document[0].querySelector("#reg"+cPane);
          angular.element(p).addClass("show");
          console.log('clicked');

         }
        if(cPane == 2) {
          p = $document[0].querySelector("#regSubButton");
          angular.element(p).addClass("show");
        }
      }
      self.validate = function(cPan, flag) {
        console.log(cPane);
        f = $document[0].querySelector("#f_reg"+cPane);
        e = angular.element(f);
        
        if(!flag)
          e.addClass("was-validated");
        else       
          e.removeClass("was-validated");

      }
    }
  });
