'use strict';
var Twit  =  require('twit');
var config = require('./config.json');
var T = new Twit(config);


let Main = {

    service: "metro",   // defaut service context

    //////////
    // Initialization
    //////////
    init: function () {
        this.types = require("./data/types.json");
        this.answers = require("./data/answers.json");

        this.loaded = true;
    },


    // Main interfacing communication
    message: function (twitter_handle, service) {
        this.service = service;

        if (!this.loaded)
            this.init();

        // this.read();
        return "alexa mesasge";
    },


    // Interprets a tweets and returns an corresponding vocal message
    //////////
    read: function (string) {
        if (!this.loaded)
            this.init();

        if (typeof string !== "string")
            return "Value is not a string";

        // Types depending on current service context
        let currentTypes = this.types[this.service];
        string = string.trim().toLowerCase();


        // Check for ignored starting string
        for (var i = 0; i < currentTypes["ignoring"].length; i++) {
            if (string.startsWith(currentTypes["ignoring"][i])) {
                // Remove ignoring part
                string = string.replace(currentTypes["ignoring"][i], "");
            }
        }
        string = string.trim();

        // Finding event mapping
        for (var event in currentTypes) {
            if (currentTypes.hasOwnProperty(event)) {
                for (var i = 0; i < currentTypes[event].length; i++) {
                    if (string.startsWith(currentTypes[event][i])) {
                        // Match!
                        this.event = event;
                    }
                }
            }
        }

        return this.randomContextualAnswer(this.event);
    },


    //////////
    // Contextual answer
    //////////
    randomContextualAnswer: function (eventContext) {
        var rand = Math.floor(Math.random() * this.answers[this.service][eventContext].length);
        return this.answers[this.service][eventContext][rand];
    },

};


//////////
// Twitter requests handler
//////////
var TwitterHandler = {

    // screen_name is the twitter handle of the wanted twitter account
    // count is the number of tweet that will be returned,
    //
    params: {
        screen_name: 'stm_Orange',
        count: 1,
        exclude_replies: true
    },

    run: function(){
        T.get('/statuses/user_timeline', this.params, this.callback);
    },

    callback: function(err, data) {
        var input = data[0].text;
        var alexaResponse = Main.read(input);
        console.log(alexaResponse);     // TODO: Return to Jon
    },
};


// testing
console.log(Main.read("Normal functionasdpasd asdof for 15 miniutes"));