var App = React.createClass({
	...
	componentDidMount: function() {
		ipc.on("onSerialConnected", function(data) {
			this.onSerialConnected(data.ports);
		}.bind(this));

		ipc.on("onSerialDisconnected", function(data) {
			this.onSerialDisconnected(data.ports);
		}.bind(this));

		ipc.on("toggleBombe", function() {
			this.refs.home.toggleBombe();
		}.bind(this));

		ipc.on("onTweet", function(tweet) {
			this.refs.home.onTweet(tweet);
		}.bind(this));
	},
	...
});
