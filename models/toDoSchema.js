 const mongoose = require("mongoose");
 const Schema = mongoose.Schema;

 const to_do_schema = new Schema(
   {
     //Schema for the todo
     todo: {
       required: true,
       type: String,
     },
     category: {
       required: true,
       type: String,
     },
     author: {
       required: true,
       type: String,
     },
     Due: {
       type: String
     },
     status:{
       type:String
     },
     archiveStatus:{
       type:Boolean
     },
     priority:{
       type:Number,
       required:true
     },
     user:{
       type:String,
       required: true
     }
   },
   {
     timestamps: true,
   }
 );

 const Model=mongoose.model('toDo',to_do_schema);//model for the schema

 module.exports=Model;