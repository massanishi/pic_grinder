var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter

var CHANGE_EVENT = 'change';

var _rankings = [
	{votes: '120', title: 'CN Tower', description: 'Must go place as a city symbol'},
	{votes: '80', title: 'China Town', description: 'Chinese historical area in the heart of hippie area'}
];


var RankingStore = Object.assign({}, EventEmitter.prototype, {
	getAll: function() {
		return _rankings;
	},
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	}
});

// AppDispatcher.

module.exports = RankingStore;