var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var EventModel=require('./EventModel')
mongoose.connect('mongodb://localhost:27017/hackforalgeria');



var UserSchema = mongoose.Schema({
    profile: {
    name: {type: String, default: ""},
    pictureUrl: {type: String, default: ""},
    phone: {type: String, default: ""},
    wilaya: {type: String, default: ""},


    // TODO: Add more profile atrributes here
  },


    userComments:[{type: mongoose.Schema.Types.ObjectId ,ref:'comments'}],

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

UserSchema.statics.joinEvent=function (UserId,EventId,cal) {
    EventModel.findOne({_id:EventId},function (err,succ) {
      if(!err){
          succ.pendingParticipents.push(UserId)
          succ.save(cal);
      }
    })
}



var UserModel=mongoose.model('User', UserSchema);


/*
var u1 =new UserModel();
u1.profile.name="ahmed";
u1.save(function (err,suc) {
    if(!err){
        console.log('biennnn')
    }
})
*/

module.exports =UserModel;

