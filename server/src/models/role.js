var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

const rSchema = new mongoose.Schema({
	title: { type: String, required: true, unique: true },
	authority_id: [{
		type: Schema.Types.ObjectId, 
		ref: 'authority' 
	}]
});

const rModel = mongoose.model('role', rSchema);

module.exports = rModel
