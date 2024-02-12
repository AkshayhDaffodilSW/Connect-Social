const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    f_name: { type: String, required: true },
    s_name: { type: String, required: false},
    email: { type: String, required: true, unique: true },
    hash: { type: String, required: true },
    salt: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);