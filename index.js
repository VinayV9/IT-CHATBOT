

var express =require('express')
var bodyParser=require('body-parser')
var app=express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

var server = app.listen(5000, function(){
    console.log("port on %d  in %s mode", server.address().port, app.settings.env )
})