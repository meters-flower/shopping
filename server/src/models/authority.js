var mongoose = require('mongoose');

var aSchema = new mongoose.Schema({
	title: { type: String, required: true, unique: true },
	detail: { type: String },
	sort: { type: Number },
	url: { type: String },
	is_delete: { type: Boolean, default: false},
	child: {
		type: [aSchema],
		default: undefined
	}
});

const aModel = mongoose.model('authority', aSchema);

module.exports = aModel