const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin@ds247007.mlab.com:47007/souvik_misra');

var Schema = mongoose.Schema;

var customerSchema = new Schema({
	name:{type:String},
	city:{type:String},
	status:{type:String}
});

var customerModel = mongoose.model('customers',customerSchema);

module.exports = customerModel;
