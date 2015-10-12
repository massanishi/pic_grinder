var React = require('react');

var RankingItem = require('./RankingItem.react');

var MainSection = React.createClass({
	render: function() {
		var rankings = this.props.rankings;

		var _rankings = [];

		for (var i = 0; i < rankings.length; i++) {
			_rankings.push(<RankingItem key={i} ranking={rankings[i]} />);
		}

		return (
			<section id='main'>
				<h2>Travel Rankings</h2>
				<ul>{_rankings}</ul>
			</section>
		)
	}
});

module.exports = MainSection;