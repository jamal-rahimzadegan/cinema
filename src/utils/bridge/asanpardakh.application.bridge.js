var appSettings = {
	platform: "",
};

var appGlobal = {
	eventSubscription: {
		trigger: function (eventName, data) {

		},
		on: function (eventName, callback) {

		},
		off: function (eventName) {

		},
		events: {},
	},
	application:{},
};

var webApp = {
	trigger: function (eventName, data) {
		// alert('Hi Dude I am Called');
		console.log(eventName + " > " + JSON.stringify(data));
		window.appGlobal.eventSubscription.trigger(eventName, data);
	},
};

export { appGlobal, webApp };
