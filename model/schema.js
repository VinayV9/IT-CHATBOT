
var db=require('../config')
var data =db.Schema({
    companyName: {type: String},
    products:[{
        productName: {type: String},
        ticketId:    {type: String},
        status:      {type: String},
        posCount:    {type:Number},
        negCount:    {type:Number},
        dateCreated: {type: Date},
        dateModified: {type: Date},
        dateEnd: {type: Date},
        timeSpent:   {type: Number},
        timeDuration:{type:Number},
        category:    {type: String},
        comment:     [{
            commentBy: {type: String},
            comments: {type: String},
            date:     {type:Date}
        }]
    }]          
})

module.exports=db.model('Data', data)






















/*
var db=require('../config')

var user =db.Schema({
    username: {type : String, required: true},
    password: {type : String, required: true, select: false}
})

module.exports= db.model('User' , user)

*/