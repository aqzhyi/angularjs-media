;'use strict';
if (!-[1,]) {
    document.createElement('flash');
}
;angular
    .module('media.directives', [])
    .directive('flash', function() {
        return {
            restrict : 'A',
            scope    : {},
            replace  : true,
            template : "<object style='[[style]]' class='[[class]]' data='[[src]]' width='[[width]]' height='[[height]]' type='application/x-shockwave-flash'> <param name='movie' value='[[src]]' /> <param name='allowscriptaccess' value='always' /> <param name='allowfullscreen' value='true' /> <param name='wmode' value='transparent' /> </object>",
            compile: function(elem, attrs, transcludeFn) {
                return function link (scope, el, attrs) {
                    angular.extend(scope, scope.$eval(attrs.flash));
                }
            },
        }
    })
    .directive('justinPlayer', function() {
        return {
            restrict : 'A',
            scope    : {},
            replace  : true,
            template : '<object width="[[width]]" height="[[height]]" style="[[style]]" type="application/x-shockwave-flash" id="live_embed_player_flash" data="http://justin.tv/widgets/live_embed_player.swf?channel=[[channel]]"> <param name="allowFullScreen" value="true"> <param name="allowScriptAccess" value="always"> <param name="allowNetworking" value="all"> <param name="wmode" value="transparent"> <param name="movie" value="http://justin.tv/widgets/live_embed_player.swf"> <param name="flashvars" value="hostname=justin.tv&amp;channel=[[channel]]&amp;auto_play=true&amp;start_volume=100"> </object>',
            compile: function(elem, attrs, transcludeFn) {
                return function link (scope, el, attrs) {
                    angular.extend(scope, scope.$eval(attrs.justinPlayer));
                }
            },
        }
    })
    .directive('justinChatroom', function() {
        return {
            restrict : 'A',
            scope    : {},
            replace  : true,
            template : '<iframe width="[[width]]" height="[[height]]" style="[[style]]" frameborder="0" scrolling="no" id="chat_embed" src="http://www.justin.tv/chat/embed?channel=[[channel]]&amp;popout_chat=true"></iframe>',
            compile: function(elem, attrs, transcludeFn) {
                return function link (scope, el, attrs) {
                    angular.extend(scope, scope.$eval(attrs.justinChatroom));
                }
            },
        }
    })
    .directive('twitchPlayer', function() {
        return {
            restrict : 'A',
            scope    : {},
            replace  : true,
            template : '<object width="[[width]]" height="[[height]]" style="[[style]]" type="application/x-shockwave-flash" id="live_embed_player_flash" data="http://www.twitch.tv/widgets/live_embed_player.swf?channel=[[channel]]"> <param name="allowFullScreen" value="true"> <param name="allowScriptAccess" value="always"> <param name="allowNetworking" value="all"> <param name="wmode" value="transparent"> <param name="movie" value="http://www.twitch.tv/widgets/live_embed_player.swf"> <param name="flashvars" value="hostname=www.twitch.tv&amp;channel=[[channel]]&amp;auto_play=true&amp;start_volume=100"> </object>',
            compile: function(elem, attrs, transcludeFn) {
                return function link (scope, el, attrs) {
                    angular.extend(scope, scope.$eval(attrs.twitchPlayer));
                }
            },
        }
    })
    .directive('twitchChatroom', function() {
        return {
            restrict : 'A',
            scope    : {},
            replace  : true,
            template : '<iframe width="[[width]]" height="[[height]]" style="[[style]]" frameborder="0" scrolling="no" id="chat_embed" src="http://www.twitch.tv/chat/embed?channel=[[channel]]&amp;popout_chat=false"></iframe>',
            compile: function(elem, attrs, transcludeFn) {
                return function link (scope, el, attrs) {
                    angular.extend(scope, scope.$eval(attrs.twitchChatroom));
                }
            },
        }
    })
;