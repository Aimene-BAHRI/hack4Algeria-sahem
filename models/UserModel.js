var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = mongoose.Schema({
  profile: {
    name: {type: String, default: ""},
    pictureUrl: {type: String, default: ""},
    phone: {type: String, default: ""},
    wilaya: {type: String, default: ""},
    // TODO: Add more profile atrributes here
  },
  reputation       : {type: Number, default: 0},
  local            : {
        email        : String,
        password     : String,
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
    },
    twitter          : {
        id           : String,
        token        : String,
        username     : String
    }
});

// generating a hash
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', UserSchema);
