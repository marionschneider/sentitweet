///////////   ***      THIS QUICK SKETCH USING P5 Libary WILL DISPLAY THE VALUES ON YOUR HTML PAGE      ****    ////////////////


var datoos;  
var foo;
var countmes;

	
function setup(){			 
				 createCanvas(windowWidth,windowHeight);
				 background(0);
				 countmes=0;
				
			 }
//websocket
 var host = location.origin.replace(/^http/, 'ws')
				 var ws = new WebSocket(host);
 ws.onmessage = function (event) {
					 countmes++;
 					datoos = JSON.parse(event.data);
					//console.log(datoos[0]);
	 				//console.log(countmes)
					scorewrite(datoos[0], datoos[1], datoos[2]);
	 				
					 if(countmes==200){
						 countmes=0;
						 direLaValeur(datoos[0]);
						 clear();
						
					 }
				 };
function direLaValeur(lemessage){
		var foo = new p5.Speech();	 
	 	foo.speak(lemessage);

	    //console.log(datoos[1]);		
}



function scorewrite(lescore, letweet, lesentiment){

	//setup
			clear(); //efface le texte precedant
			background(0);
			noFill();
			stroke(255);
			
	//titre: tweet
			textStyle(BOLD);
			textSize(14);
			fill(255);
			noStroke();
			text('Tweet coming with the keywords : This Artwork is', 200, 450);
	//titre: sentiment associé au tweet
			textStyle(BOLD);
			textSize(14);
			fill(255);
			noStroke();
			text('related sentiment', 920, 260);
	//la valeur numerique du sentiment de chaque tweet
			textStyle(BOLD);
			textSize(20);
			if(lesentiment<0){
			fill(255,0,0)} else {
			fill(0,255,0)
			}
			noStroke();
			text(lesentiment, 967, 300);
	//texte du tweet
			textStyle(NORMAL);
			textSize(12);
			fill(255);
			noStroke();
			text(letweet, 200, 490);
	//titre: la valeur est
			textStyle(NORMAL);
			textSize(12);
			noStroke();
			text('the value of the artwork is ', 200, 250)
	//valeur numerique de l'oeuvre
			textStyle(BOLD);
			textSize(50);
			noStroke();
			text(lescore, 200,240);
			//console.log(lescore);
			redraw(); 

							}

