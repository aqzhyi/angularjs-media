Media directives for AngularJS
=================

## Compatibility

Restrict is "A" for IE 8, that mean you don't need create element yourself.

IE 7 is untested.

## Requirements

AngularJS v1.0.0+ is currently required.

Tested on 1.0.4, 1.0.6.

## Installation

```js
angular.module('yourApp', ['media.directives']);
```

## Usage

```html
<i flash="{src:'//sc2clan.tw/serial/common/270x60/mis1002.swf', width:270, height:60}"></i>
```
```html
<i flash="{src:'//sc2clan.tw/serial/common/270x60/mis1002.swf', width:270, height:60}"></i>
```
```html
<i flash="{src:'//sc2clan.tw/serial/common/270x60/2012Q1-kingston.swf', width:270, height:60}"></i>
```
```html
<i flash="{src:'//sc2clan.tw/serial/common/270x60/AVerMedia.swf', width:270, height:60}"></i>
```
```html
<i twitch-player="{channel:'witness1129', width:400, height:300}"></i>
```
```html
<i twitch-chatroom="{channel:'witness1129', width:400, height:300}"></i>
```
```html
<i justin-player="{channel:'witness1129', width:400, height:300}"></i>
```
```html
<i justin-chatroom="{channel:'witness1129', width:400, height:300}"></i>
```