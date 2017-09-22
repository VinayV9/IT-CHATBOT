

var express =require('express')
var bodyParser=require('body-parser')
var app=express()
var mongoose=require('mongoose')
var watson=require('watson-developer-cloud')
var request=require('request')
var User=require('./model/schema')
var dateTime=require('node-datetime')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname+'/public'))


// authentication with ibm watson bluemix conversation service
var conversation = watson.conversation({
  username: '2fa0fedf-8802-4c8c-a62e-c5378a86cab7',
  password: 'MFOSqBSFfERQ',
  version:'v1',
  version_date:'2016-05-19'
})

// recieve messages from user
app.post('/message',function(req,res){
    
    var message=req.body.message
    console.log("virus: %s",message)
    conversation.message({
        input: { text: message },
        workspace_id: 'ffbbfd5e-7415-4afb-9371-b6a65b403399'
       }, function(err, response) {
           if (err) {
             console.error(err)
           } else {
               
           console.log("Bot: %s",JSON.stringify(response.output.text[0]))
           
           }
      })
      res.sendStatus(200)
})

// this is server on port 3000
app.listen(3000,function(){
    console.log("port on 3000")
})

// database part



app.post('/data',function(req,res){
    var q=req.body
    console.log(q.dateCreated);
    var de=dateTime.create(q.dateEnd);
    var dc=dateTime.create(q.dateCreated);
    var timeDiff=Math.abs(de.getTime()-dc.getTime());
    var diffDays=Math.ceil(timeDiff/(1000*3600*24))
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
            date: q.date
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