const mongose = require('mongoose');

const broSchema = new mongose.Schema({
    name:{type:String, required:true},
    price:{type:Number, required:true},
    cels:{type:String, required:true},
    category:{type:String, required:true},
});
module.exports = mongose.model('bros', broSchema);