var React = require('react');

var MainSection = require('./MainSection.react');
var RankingStore = require('../stores/RankingStore');

function getRankingState() {
	return {
		rankings: RankingStore.getAll(),
	};
}

var App = React.createClass({
	getInitialState: function() {
		return getRankingState();
	},
	render: function() {
		return(
			<MainSection rankings={this.state.rankings} />

		);
	}
});

module.exports = App;