angular.module('angularjs.media.directives', [])
  .config(function() {
    if (!-[1,]) {
      document.createElement('twitch');
      document.createElement('justin');
      document.createElement('flash');
      document.createElement('youtube');
    }
  })
  .value('MediaFlashPlayerEmbed', function() {
    'use strict';
    return {
      scope: {
        src: "@",
        vars: "@"
      },
      restrict: 'E',
      replace: true,
      template: 
        '<object data="{{src}}" type="application/x-shockwave-flash">'+
          '<param name="allowscriptaccess" value="always" />'+
          '<param name="allowfullscreen" value="true" />'+
          '<param name="wmode" value="transparent" />'+
        '</object>',
      compile: function(elem, attrs, transcludeFn) {
        return function link (scope, element, attrs) {
          // Prevent error when the flash player connect source before scope.channel unready. (e.g. When ng-view)
          scope.$watch('src', function(src) {
            element.append('<param name="movie" value="' + src + '" />');
          });
          scope.$watch('vars', function(vars) {
            element.append('<param name="flashvars" value="' + vars + '" />');
          });
        };
      }
    };
  })
  .value('MediaJustinLiveStreamPlayer', function(configure) {
    'use strict';
    configure = configure || {
      type: 'justin'
    };

    return {
      restrict: 'E',
      scope: {
        channel: '@'
      },
      template: 
        '<object type="application/x-shockwave-flash" '+
                'id="live_embed_player_flash" '+
                'data="http://www.' + configure.type + '.tv/widgets/live_embed_player.swf?channel={{channel}}">'+
          '<param name="allowFullScreen" value="true" />'+
          '<param name="allowScriptAccess" value="always" />'+
          '<param name="allowNetworking" value="all" />'+
          '<param name="auto_play" value="always">'+
          '<param name="wmode" value="transparent">'+
          '<param name="flashvars" value="auto_play=true&amp;channel={{channel}}&amp;start_volume=50" />'+
        '</object>',
      replace: true,
      compile: function(elem, attrs, transcludeFn) {
        return function link (scope, element, attrs) {
          // Prevent error when the Justin player connect source before scope.channel unready. (e.g. When ng-view)
          scope.$watch('channel', function(channel) {
            element.append('<param name="movie" value="http://www.' + configure.type + '.tv/widgets/live_embed_player.swf" />');
          });
        };
      }
    };
  })
  .value('MediaJustinLiveStreamChatroom', function(configure) {
    'use strict';
    configure = configure || {
      type: 'justin'
    };

    return {
      restrict: 'A',
      compile: function(elem, attrs, transcludeFn) {
        return function link (scope, element, attrs) {
          var channel = attrs.channel ? attrs.channel : attrs.twitchChatChannel;
          element.attr('frameborder', '0');
          element.attr('scrolling', 'no');
          element.attr('src', 'http://' + configure.type + '.tv/chat/embed?channel=' + channel + '&amp;popout_chat=true');
        };
      }
    };
  })
  .value('YoutubePlayerEmbed', function() {
    'use strict';
    return {
      scope: {
        autoplay: "=",
        start: "=",
        end: "=",
        params: "@",
        v: "@"
      },
      restrict: 'E',
      replace: true,
      template: '<iframe ng-src="http://www.youtube.com/embed/{{v}}{{querys}}" frameborder="0" allowfullscreen></iframe>',
      compile: function(elem, attrs, transcludeFn) {
        return function link (scope, element, attrs) {
          var
            paramsObject = {},
            paramsString = '';

          attrs.$observe('v', function(v) {
            scope.v = v;
          });

          // If <youtube params=""> already setup, then passing variable directly.
          if (attrs.params) {
            scope.querys = attrs.params;
            return;
          }

          // Else make querys.
          if (scope.autoplay) {
            paramsObject.autoplay = 1;
          }

          if (scope.start) {
            paramsObject.start = scope.start;
          }

          if (scope.end) {
            paramsObject.end = scope.end;
          }

          angular.forEach(paramsObject, function(value, key) {
            paramsString = paramsString + key + '=' + value + '&';
          });

          if ('' !== paramsString) {
            scope.querys = '?' + paramsString;
          }
        };
      }
    };
  })
  .directive('youtube', function factory(YoutubePlayerEmbed) {
    return YoutubePlayerEmbed();
  })
  .directive('flash', function factory(MediaFlashPlayerEmbed){
    return MediaFlashPlayerEmbed();
  })
  .directive('justin', function factory(MediaJustinLiveStreamPlayer){
    return MediaJustinLiveStreamPlayer({
      type: 'justin'
    });
  })
  .directive('twitch', function factory(MediaJustinLiveStreamPlayer){
    return MediaJustinLiveStreamPlayer({
      type: 'twitch'
    });
  })
  .directive('justinChat', function factory(MediaJustinLiveStreamChatroom) {
    return MediaJustinLiveStreamChatroom({
      type: 'justin'
    });
  })
  .directive('justinChatChannel', function factory(MediaJustinLiveStreamChatroom) {
    return MediaJustinLiveStreamChatroom({
      type: 'justin'
    });
  })
  .directive('twitchChat', function factory(MediaJustinLiveStreamChatroom) {
    return MediaJustinLiveStreamChatroom({
      type: 'twitch'
    });
  })
  .directive('twitchChatChannel', function factory(MediaJustinLiveStreamChatroom) {
    return MediaJustinLiveStreamChatroom({
      type: 'twitch'
    });
  })
;