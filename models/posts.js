const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    url:{type:String ,required:false},
    text:{type:String , required:false},
    email:{type:String, required:true},
    parentPost: { type: mongoose.Schema.Types.ObjectId, ref: 'Posts', required: false }
    },{
    timestamps: true 
    }
);

module.exports = mongoose.model('Posts', postSchema);