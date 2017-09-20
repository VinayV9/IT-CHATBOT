

var express =require('express')
var bodyParser=require('body-parser')
var app=express()
var watson=require('watson-developer-cloud')
var request=require('request')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname+'/public'))

var conversation = watson.conversation({
  username: '2fa0fedf-8802-4c8c-a62e-c5378a86cab7',
  password: 'MFOSqBSFfERQ',
  version:'v1',
  version_date:'2016-05-19'
});




app.post('/data',function(req,res){
    var message=req.body.message
    console.log("virus: %s",message)
    conversation.message({
        input: { text: message },
        workspace_id: 'ffbbfd5e-7415-4afb-9371-b6a65b403399'
       }, function(err, response) {
           if (err) {
             console.error(err)
           } else {
               //var reply=JSON.parse(response, null, 2)
            //console.log(JSON.stringify(response, null, 2))
            //console.log(reply.output)
           console.log("Bot: %s",JSON.stringify(response.output.text[0]))
           }
      })
      res.sendStatus(200)
})


app.listen(3000,function(){
    console.log("port on 3000")
})

/*
app.post('/events', function(req, res){
 
     if(req.body.type === 'url_verification'){
         res.send(req.body.challenge);
     }
    var q=req.body
    if(q.token!== process.env.SLACK_VERIFICATION_TOKEN){
        res.sendStatus(400)
        return
    }else if(q.type==='event_callback'){
        if(!q.event.text) return
        analyzeTone(q.tone)
        res.send(200)
    }

})

var tone_analyzer = watson.tone_analyzer({

        url: "https://gateway.watsonplatform.net/tone-analyzer/api",
        username: "4a77c252-c86b-448a-9256-b6fde73ed8ec",
        password: "oxtQ2B6iDOaO",
        version:'v3',
        version_date:'2016-05-19'

})

var confidencethreshold=0.55;
tone_analyzer.tone({text:'virus'}, function(err, tone){
    if(err) console.log(err)
    tone.document_tone.tone_categories.forEach(function(tonecategory){
        if(tonecategory.category_id==='emotion_tone'){
            console.log(tonecategory.tones)
            tonecategory.tones.forEach(function(emotion){
                if(emotion.score >= confidencethreshold){
                    postEmotion(emotion, ev)
                }
            })
        }
    })
})

function postEmotion(emotion, ev){
    var message ='feeling' + emotion.tone_id;
    var options={
        method: 'POST',
        url: 'https://slack.com/api/chat.postMessage',
        form:{
            token: 'xoxb-242292472339-wh8PV4IBzaiyW6fHJFFPJiiZ',
            channel: ev.channel,
            text: message,
            as_user: false,
            username:'megathon'
        }
    }

    request(options, function(err, res, body){
        if(err) console.log(err)
    })
}


app.get('/recieve',function(req,res){
  console.log(req.body)
  res.sendStatus(200)  
})

app.post('/send', function(req,res){
    console.log(req.body)
    res.send(req)
})

var server = app.listen(5000, function(){
    console.log("port on %d  in %s mode", server.address().port, app.settings.env )
}) 

*/