const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const user_Schema=new Schema({
    username:{
        type:String,
        required:true
    },
    useremail:{
        type:String,
        required:true
    },
    userpassword:{
        type:String,
        required:true
    }
})

const Model =mongoose.model('users',user_Schema);
module.exports=Model;
