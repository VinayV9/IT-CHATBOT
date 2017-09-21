 var mongoose=require('mongoose')
 mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/botDataBase', function(){
        console.log("database connected to botDataBase")
    })



module.exports=mongoose 