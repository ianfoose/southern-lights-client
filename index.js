// global vars
var GPIO = require('onoff').Gpio;
var webSocket = require('websocket').w3cwebsocket;

// pin map
var pinMap =  {
	1:12,
	2:2,
	3:3,
	4:4,
	5:5,
	6:6,
	7:7,
	8:8
};

// export
module.exports.createClient = function(options) {
	if(options) {
		// set pin map
		if(options.pinMap) {
			pinMap = options.pinMap;
		}

		if(options.url && options.protocol) {
			var client = new webSocket(options.url, options.protocol);

			client.onerror = function() {
			    console.log('Connection Error');
			};

			client.onopen = function() {
			    console.log('Connected');
			}

			client.onclose = function() {
			    console.log('Client Closed');
			};

			client.onmessage = function(e) {
			    if(e.data) {
			        try {
			            var lights = JSON.parse(e.data);
						
						if(lights.constructor === Array) {
				            for(var i=0;i<lights.length;i++) {
								routeLight(lights[i]);                         
				            }
						} else {
							routeLight(lights);
						}
			        } catch(e) {
			            console.log('JSON Error: '+e.message);
			        }
			    }
			};
		}
	} else {
		throw new Error('No Options specified');
	}
}

// other functions
function routeLight(light) {
	if(light.state && light.channel) {
		checkLight(light.channel, light.state);
	}
}

function checkLight(key, state) {
	if(pinMap[key] != null) { 
		var led = new GPIO(pinMap[key], 'out');

		if(state == null) {
			state = false
		}

		if(state == "true") {
			led.writeSync(1);
		} else {
			led.writeSync(0);
		}
	} else {
		console.log("key is not in pin map");
	}	
}