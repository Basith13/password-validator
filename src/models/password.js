const mongoose = require('mongoose');

const schema = mongoose.Schema({
    password: {
        type: String,
        required: true,
      },
},{
    timestamps: true,
});
module.exports = PasswordModel = mongoose.model('password', schema);
