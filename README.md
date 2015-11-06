AngularJS Media Directives
=================

## Features

Simply embed media such as flash, twitch, justin player with simple html components.

Simple demo: [/app]

[/app]: https://github.com/Pleasurazy/angularjs-media/tree/master/app

![](https://raw.github.com/Pleasurazy/angularjs-media/master/app/files/demo2.jpg)

![](https://raw.github.com/Pleasurazy/angularjs-media/master/app/files/demo.jpg)

## Requirements

- AngularJS, tested on 1.0.7.

## Installation

```js
var app = angular.module('app', ['angularjs.media.directives']);
```

## Usage

To embed flash player:

```html
  <flash width="270" height="60" src="files/Inter-banner.swf"></flash>
  <flash width="270" height="60" src="files/AMD-banner.swf"></flash>
  <flash width="270" height="60" src="files/MSI-banner.swf"></flash>
   <flash width="270" height="60" src="games/poker.swf" vars="localeChain=fr_FR;start_volume=50"></flash>
```

Params: 
* src - {expression} - passing string url to convert to flash player.
* vars - {expression} - passing list of key=value pairs that will be added as a "flashvars" param for the flash player

---

To embed youtube player:

```html
  <youtube width="466" height="250" v="BlQ2tMQzg80" start="16" end="30" autoplay="0"></youtube>
  <youtube width="466" height="250" v="BlQ2tMQzg80" params="?autoplay=1&start=25"></youtube>
  <youtube width="466" height="250" v="{{firstVideo}}" start="64" end="120" autoplay="1"></youtube>
  <youtube width="466" height="250" v="{{firstVideo}}?autoplay=1&start=90&end=120"></youtube>
```

Params: 
* v        - {template}   - passing `v` code to convert youtube embed player.
* start    - {expression} - passing number setup start time.
* end      - {expression} - passing number setup end time.
* autoplay - {expression} - passing 0 or (true|1) for auto start.
* params   - {template}   - passing string to setup by single attribute.

Notice: If `<youtube params="">` already setup, then passing variable directly.

---

To embed twitch player and chatroom:

```html
  <twitch width="600" height="400" channel="honeydotcakes"></twitch>
  <iframe width="300" height="400" twitch-chat channel="honeydotcakes"></iframe>
```

Params:
* channel     - {template}  - passing string of channel name.
* twitch-chat - (attribute) - identify `iframe` element to embed chatroom.

Notice: Chatroom directive can be `twitch-chat` and `channel` or `twitch-chat-channel` self alone.

---

To embed justin player and chatroom:

```html
  <justin width="600" height="400" channel="ms_yuyu"></justin>
  <iframe width="300" height="400" justin-chat-channel="ms_yuyu"></iframe>
```

Params:
* channel     - {template}  - passing string of channel name.
* justin-chat - (attribute) - identify `iframe` element to embed chatroom.

Notice: Chatroom directive can be `justin-chat` and `channel` or `justin-chat-channel` self alone.

## References

+ [Twitch-API documents].

[Twitch-API documents]: https://github.com/justintv/Twitch-API/blob/master/embedding.md