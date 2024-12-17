var bridgeListener = {
	eventSubscription: {
		trigger: function (eventName, data) {
			var cEvent = new CustomEvent(eventName, { detail: data });
			window.dispatchEvent(cEvent);
		},
		on: function (eventName, callback) {
			var callMe = function (e) {
				callback(e.detail);
			};
			this._events[eventName] = callMe;
			window.addEventListener(eventName, callMe);
		},
		off: function (eventName) {
			var registeredCallback = this._events[eventName];
			if (!registeredCallback) {
				return;
			}

			window.removeEventListener(eventName, registeredCallback);
			this._events[eventName] = undefined;
		},
		_events: {},
	},
};

var webApp = {
	trigger: function (eventName, data) {
		// alert('Hi Dude I am Called');
		console.log(eventName + " > " + JSON.stringify(data));
		bridgeListener.eventSubscription.trigger(eventName, data);
	},
};
