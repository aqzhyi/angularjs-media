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

to embed flash player:

```html
  <flash width="270" height="60" src="files/Inter-banner.swf"></flash>
  <flash width="270" height="60" src="files/AMD-banner.swf"></flash>
  <flash width="270" height="60" src="files/MSI-banner.swf"></flash>
```

---

to embed youtube player:

```html
  <youtube width="466" height="250" v="BlQ2tMQzg80" start="16" end="30" autoplay="0"></youtube>
  <youtube width="466" height="250" v="BlQ2tMQzg80" params="?autoplay=1&amp;start=25"></youtube>
  <youtube width="466" height="250" v="{{firstVideo}}" start="64" end="120" autoplay="1"></youtube>
  <youtube width="466" height="250" v="{{firstVideo}}?autoplay=1&amp;start=90&amp;end=120"></youtube>
```

Notice: If `<youtube params="">` already setup, then passing variable directly.

Params: 
  v        - {template}   - passing `v` code into to convert youtube embed player.
  start    - {expression} - passing number setup start time.
  end      - {expression} - passing number setup end time.
  autoplay - {expression} - passing 0 or (true|1) for auto start.
  params   - {template}   - passing string to setup by single attribute.

---

to embed twitch player and chatroom:

```html
  <twitch width="600" height="400" channel="honeydotcakes"></twitch>
  <iframe width="300" height="400" twitch-chat channel="honeydotcakes"></iframe>
```

---

to embed justin player and chatroom:

```html
  <twitch width="600" height="400" channel="ms_yuyu"></twitch>
  <iframe width="300" height="400" twitch-chat-channel="ms_yuyu"></iframe>
```

Notice: Chatroom attribute can be `twitch-chat` and `channel` or `twitch-chat-channel` self alone.

## References

+ [Twitch-API] documents.

[Twitch-API]: https://github.com/justintv/Twitch-API/blob/master/embedding.md