

var express =require('express')
var bodyParser=require('body-parser')
var app=express()
//var mongoose=require('mongoose')
var MongoClient=require('mongodb').MongoClient
var watson=require('watson-developer-cloud')
var request=require('request')
var User=require('./model/schema')
var dateTime=require('node-datetime')
var db=require('./config')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname+'/public'))

// authentication with ibm watson bluemix conversation service
var conversation = watson.conversation({
    
    username: "5cddcd65-0791-4fa1-86d5-c0ea8d9a25e8",
    password: "55Y3CBGHRzR7",
    version:'v1',
    version_date:'2016-05-19'
})

// recieve messages from user
app.post('/message',function(req,res){
    console.log(db.datas)
    var message=req.body.message
    console.log("virus: %s",message)
    conversation.message({
        input: { text: message },
        workspace_id: '4ecab80b-d2f6-47c4-934f-e9f35971ab56'
       }, function(err, response) {
           
           if (err) {
             console.error(err)
           } else {
            console.log(response)
            var entity=response.entities[0].entity
            var intent=response.intents[0].intent
            console.log(entity)
            console.log(intent)  
            
           if(entity==='open'&&intent==='count'){
               var ans= User.find({"products.status":"true"}).count()
               console.log("Bot: %d",ans)
           }else if(entity==='close'&&intent==='count'){
                var ans= User.find({"products.status":"false"}).count() 
                console.log("Bot: %d",ans)
           }else if(entity==='ticket'&&intent==='count'){
            ans=User.find({"products.status":"flase"}).count()
            ans+=User.find({"products.status":"flase"}).count()
            console.log("Bot: %d",ans)
           }

           console.log("Bot: %s",JSON.stringify(response.output.text[0]))
           
           }
      })
      res.sendStatus(200)
})

// this is server on port 3000
app.listen(5000,function(){
    console.log("port on 5000")
})

// database part



app.post('/data',function(req,res){
    var q=req.body
    var diffDays=0
    if(q.status===false){
        var de=dateTime.create(q.dateEnd);
        var dc=dateTime.create(q.dateCreated);
        var timeDiff=Math.abs(de.getTime()-dc.getTime());
         diffDays=Math.ceil(timeDiff/(1000*3600*24))
    }
    
var user = new User({
    
    companyName: q.companyName,
    products:[{
        productName: q.productName,
        ticketId:    q.ticketId,
        status:      q.status,
        posCount:    0,
        negCount:    0,
        dateCreated: q.dateCreated,
        dateModified:q.dateModified,
        dateEnd:     q.dateEnd,
        timeSpent:   q.timeSpent,
        timeDuration:diffDays,
        category:    q.category,
        comment:     [{
            commentBy: q.commentBy,
            comments: q.comments,
            date: q.date.modified
        }]
    }]    
})
  console.log("hello");
   user.save(function(err){
       if(!err) 
       console.log("data is inserted in botDataBase")
       res.sendStatus(200)
  })
})