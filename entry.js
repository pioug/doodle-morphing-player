require('angular');
require('angular-animate');

require("./style.scss");

angular
  .module('Doodle', ['ngAnimate'])
  .directive('player', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: require('./player.html'),
      link: function(scope, element) {
        var player = element[0].querySelectorAll('.player')[0],
          audio = new Audio('cocoon_-_take_off.mp3');

        audio.addEventListener('timeupdate', function() {
          scope.duration = this.duration * 1000;
          scope.currentTime = this.currentTime * 1000;
          scope.$applyAsync();
        });

        scope.toggle = function() {
          element.toggleClass('playing');
          if (element.hasClass('playing')) {
            scope.playing = true;
            audio.play();
            setTimeout(function() {
              player.style.overflow = 'hidden';
            }, 200);
          } else {
            scope.playing = false;
            audio.pause();
            setTimeout(function() {
              player.style.overflow = 'initial';
            }, 300);
          }
        };

        scope.restart = function() {
          audio.currentTime = 0;
        };
      }
    };
  });
