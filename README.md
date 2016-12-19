# sentitweet

Sentitweet is an artwork created by Marion Schneider at UQAM.

It consists of a Twitter bot searching with the Query "This artwork is" and analysing the related sentiment of each Tweet. It then displays a real-time value on a TFT screen and prints out some of the tweets on a Thermal Printer via WIFI connected ESP8266 (wemos).

Here is the code for the app, running with node.js, using both sentiment npm, twit npm and ws npm (websocket). 
You will have to download them in your project folder using the command npm install in your terminal.

sentiment : https://www.npmjs.com/package/sentiment

twit : https://github.com/ttezel/twit

ws : https://www.npmjs.com/package/ws

In order to connect with the twitter API, you will also need to get some ( a lot ) of access keys that you can get at https://dev.twitter.com/ They are all grouped in the config file. You have to update them with your own.

The twitter account related to the artwork is @sentitweeet.
The app runs on a server but can be run localy at port 9997.

Material used for the project is : TFT 1.8 screen, 
                                   Adafruit Thermal Printer Guts,
                                   Wemos Mini.
                                   
You can get the code for the ioT part of the project in another repository called Sentitweet ioT
              
