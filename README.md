# Southern Lights Client
A node client for accessing a southern-lights-server and controlling GPIO accessories via websockets.

![southern-lights-client-logo](https://fooseindustries.com/hosted/southern-lights.jpg)

## Install

Install using ```npm install southern-lights-client``` or by manual install.

## Use

Supply a vaild url and protocol to the southern lights socket server.

```js
var client = require('southern-lights-client');

client.createClient({url: 'wss://url:port/','protocol':'echo-protocol'});
```
