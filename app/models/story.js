var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StoryShema = new Schema({

	creator: { type: Schema.Types.ObjectId, ref: 'User'},
	content: String,
	created: { type: Date, defauly: Date.now}

});

module.exports = mongoose.model('Story', StoryShema); 