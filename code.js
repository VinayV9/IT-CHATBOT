var bot = new SlackBot({
    token: 'xoxb-244099569090-Pj2yG0YJuDBdhz8pFHEprN8I', // Add a bot https://my.slack.com/services/new/bot and put the token 
    name: 'testBot'
})
'




{
    
    "company":{ 
            "companyName": "abc.lmtd" 
    },
    "products":[{
            "productName": "product 1",
            "ticketId":    1234,
            "status":      false,
            "posCount":    0,
            "negCount":    0,
            "dateCreated": ,
            "dateModified":,
            "dateEnd":     ,
            "timeSpent":   20,
            "sla":         2,
            "category":    ,
            "comment":     [{
                "commentBy": "[E] vinay",
                "comments": "how much time it will take"
    }]       
    
}


'
//var reply=JSON.parse(response, null, 2)
            //console.log(JSON.stringify(response, null, 2))
            //console.log(reply.output)


bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
        icon_emoji: ':cat:'
    }
    
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services 
    bot.postMessageToChannel('general', 'meow!', params)
    
    // define existing username instead of 'user_name'
    
    // If you add a 'slackbot' property, 
    // you will post to another user's slackbot channel instead of a direct message
    bot.postMessageToUser('chatbot', 'meow!', { 'slackbot': true, icon_emoji: ':cat:' }) 
    
    // define private group instead of 'private_group', where bot exist
    //bot.postMessageToGroup('private_group', 'meow!', params)
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

var date1 = new Date("7/13/2010");
var date2 = new Date("12/15/2010");
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
alert(diffDays);

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

{
    commentBy:"[e]-Ram",
    comments:"preparing for final test",
    date: ISODate("2017-02-02T18:30:00Z")

 },
 {
     commentBy:"[c]-Vinay",
     comments:"Alright",
     date:ISODate("2017-02-03T18:30:00Z")
  
  },
  {
     commentBy:"[c]-Vinay",
     comments:"could you please complete it early",
     date: ISODate("2017-02-03T18:30:00Z")
  
  },
  {
     commentBy:"[e]-Ram",
     comments:"we do our best",
     date:ISODate("2017-02-04T18:30:00Z")
  
  },
  {
     commentBy:"[c]-Vinay",
     comments:"Thank you",
     date: ISODate("2017-02-04T18:30:00Z")
  
  }