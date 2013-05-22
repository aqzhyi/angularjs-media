AngularJS Media Directives
=================

## Features

Simply embed media such as flash, twitch, justin player with simple html components.

Simple demo: [/app]

[/app]: https://github.com/Pleasurazy/angularjs-media/tree/master/app

![](https://raw.github.com/Pleasurazy/angularjs-media/master/app/files/demo.jpg)

## Requirements

- AngularJS, tested on 1.0.6.

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