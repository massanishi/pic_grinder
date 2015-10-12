var React = require('react');

var ReactItem = React.createClass({
	render: function() {
		return (
			<li id='ranking-item'>
				{this.props.ranking.title}
			</li>
		)
	}
});

module.exports = ReactItem;