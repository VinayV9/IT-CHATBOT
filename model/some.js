
var db=require('../config')
var usr =db.Schema({
    
   username: {type : String}

})

module.exports=db.model('Usr', usr)
