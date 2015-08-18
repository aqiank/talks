const TOP = 0,
	MIDDLE = 1,
	BOTTOM = 2;

var Status = React.createClass({
	...
	render: function() {
		return (
			...
				<h4>Top</h4>
				{this.portElements(TOP)}
				...
				<h4>Middle</h4>
				{this.portElements(MIDDLE)}
				...
				<h4>Bottom</h4>
				{this.portElements(BOTTOM)}
			...
		);
	},
	...
});
