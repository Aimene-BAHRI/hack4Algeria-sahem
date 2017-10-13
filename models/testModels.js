/**
 * Created by kissi on 13/10/17.
 */
var mongoose = require('mongoose');
var EventModel=require('./EventModel');
var SocietyModel=require('./SocietyModel');
var UserModel= require('./UserModel')

mongoose.connect('mongodb://localhost:27017/hackforalgeria');


UserModel.joinEvent("59e05863f13aee583042de8e","59e05d143eb5565a5b48ffe2",function (err,succ) {


    if(!err){
        console.log(succ)
    }
})

var fields={
    name:'nameEvent',
    s_date:Date.now(),
    endDate:Date.now(),

}
/*
UserModel.userCreateEvent("59e05863f13aee583042de8e",fields,function () {

})*/