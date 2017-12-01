# About
A node client for accessing a southern-lights-server and controlling GPIO accessories via websockets.

![sputhern-lights-logo](/southern-lights.jpg)

## Install

### NPM

Install using ```npm install southern_lights_client``` or by manual install.

### Manual

```var server = require('./client.js');```

## Use

Supply a vaild url and protocol to the southern lights socket server.

```js
var client = require('southern_lights_client');

client.createClient({url: 'wss://url:port/','protocol':'echo-protocol'});
```
