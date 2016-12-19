var tweets;
var tweetext;
var parameters;
var vscore;
var score = 0; // variable globale
/////////// gestion du websocket
var WebSocketServer = require("ws").Server
var http = require("http")
var express = require("express")
var app = express()
var port = process.env.PORT || 9997
app.use(express.static(__dirname + "/"))
var server = http.createServer(app)
server.listen(port)
console.log("http server listening on %d", port)
var wss = new WebSocketServer({server: server})
console.log("websocket server created")

wss.on("connection", function(ws) {
  grosseFonction(ws);
  console.log("websocket connection open")
  ws.on("close", function() {
    console.log("websocket connection close")
    
  })
})
////////// gestion des tweets
function grosseFonction(ws) {
	var Twit = require('twit');
	var config = require('./config');
	//console.log('./config');
	var T = new Twit(config);
	// appel node sentiment //
	var sentiment = require('sentiment');
	// rechercher le tweet
	var allTweets = []; ///
	var motsClefs = 'Art+is' // les mots clefs doivent être séparés par des virgules
	var stream1 = T.stream('statuses/filter', { track: motsClefs });
		stream1.on('tweet', function (tweet) {
			var tweetext = tweet.text;
			//console.log(tweetext);
			var r1 = sentiment(tweetext);	
			//console.log(r1);  
			vscore = score;
			score = r1.score+vscore;
			var scoreduntweet = r1.score
			var BillGatesBankAccount = 75000000000 ;
			if (score >= BillGatesBankAccount){	
				console.log('TROP CHER ' + score);
				
				stream1.stop();
			}
		
/////////////reponse du bot aux evenements des utilisateurs
	var stream2 = T.stream('user');
	stream2.on ('tweet', tweetEvent);
			
function tweetEvent(eventMsg) {
	//console.log("Follow Event!");
	var replyto = eventMsg.in_reply_to_screen_name;
	var text = eventMsg.text;
	var from = eventMsg.user.screen_name;
	console.log(replyto + ' ' + from);
	
				if (replyto == 'java_artiste'){
			var newtweet = 'thank you ' + '@' + from + ' you now owe me ' + tabjson[0] + ' good sentiment'
			tweetIt(newtweet);
			score = 0; //reboot le score quand quelqu'un l'achete
											  }
								   }

			function tweetIt(txt) {
	
			var tweet = {
				status: txt
						}
			T.post('statuses/update', tweet, tweeted);
			
			function tweeted(err, data, response){
	if (err) {
		console.log("smthing WENT WRONG");
			 } else {
		console.log("WOORRRKKEEEDD");
					}
								  }
}
		//console.log('LA VALEUR DE CETTE OEUVRE EST ' + score);
		//console.log('le SCORE EST ' + r1.score);
			
			tabjson = [score,tweetext,scoreduntweet];
			//console.log("ICIIIIIII " + tabjson[1]);
			
		 ws.send(JSON.stringify(tabjson), function() {  })
		 if (scoreduntweet >0 || scoreduntweet <0){
		 sendJson(tabjson[0], tabjson[1], tabjson[2]);
		}
	});	
	
	///////connection thingspeak
	function sendJson(lescore, letweet, lesentiment){
		var ThingSpeakClient = require('thingspeakclient');
var client = new ThingSpeakClient();


var yourWriteKey = 'PASTE YOUR THINGSPEAK WRITE KEY HERE';
var channelID = PASTE YOUR CHANNEL ID HERE;


client.attachChannel(channelID, { writeKey:'PASTE YOUR WRITE KEY HERE'}, callBackThingspeak);


client.updateChannel(channelID, {field1: lescore, field2: letweet, field3: lesentiment}, function(err, resp) {
    if (!err && resp > 0) {
       // console.log('update successfully. Entry number was: ' + resp);
    }
    else {
      //console.log(err);
    }
});



function callBackThingspeak(err, resp)
{
    if (!err && resp > 0) {
       // console.log('Successfully. response was: ' + resp);
    }
    else {
      //console.log(err);
    }
}
	}
///////////////
}


    		