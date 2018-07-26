var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

const adminSchema = new mongoose.Schema({
	name: { type: String, required: true, unique: true },
	password: { type: String },
	state: { type: Number },
	role_id:{ type: Schema.Types.ObjectId, ref: 'role' },
});

const adminModel = mongoose.model('admin', adminSchema);

module.exports = adminModel