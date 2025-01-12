const mongose = require('mongoose');

const userSchema = new mongose.Schema({
    username:{type:String, required:true},
    email:{type:String, required:true},
    role :{type:String, required:true},
});
module.exports = mongose.model('users', userSchema);