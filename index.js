/* eslint-disable  func-names */
/* eslint-disable  no-console */
const Twit = require('twit');
const Alexa = require('ask-sdk');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'LaunchRequest'
    },
    handle(handlerInput) {
        const speech_text = "How can I help you today?";
        return handlerInput.responseBuilder
            .speak(speech_text)
            .reprompt(speech_text)
            .getResponse()
    }
}

const MetroLineHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === "CanFulfillIntentRequest" || (request.type === 'IntentRequest'
            && request.intent.name === 'MetroLineIntent');
    },
    async handle(handlerInput) {
        const slots = handlerInput.requestEnvelope.request.intent.slots;

        ///////////////////
        // MAIN

        let Main = {

            service: "metro",   // defaut service context
            event: "normal",    // defaut event reading

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
                if (typeof service !== "undefined")
                    this.service = service;

                if (!this.loaded)
                    this.init();

                return TwitterHandler.run(twitter_handle)
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

                return this.randomContextualAnswer(this.event) + this.checkForResumeTime(string);
            },


            //////////
            // Contextual answer
            //////////
            randomContextualAnswer: function (eventContext) {
                var rand = Math.floor(Math.random() * this.answers[this.service][eventContext].length);
                return this.answers[this.service][eventContext][rand];
            },

            // Add resume time text
            checkForResumeTime: function (text) {
                var matched = text.match(/[0-2]*[0-9]h?:?[0-6][0-9]/g);;

                console.log("this was matched " + matched);
                if (matched !== null && matched[0]) {
                    return " The service expected to resume at " + matched[0];
                }
                return "";
            }

        };


        //////////
        // Twitter requests handler
        //////////
        var TwitterHandler = {

            // screen_name is the twitter handle of the wanted twitter account
            // count is the number of tweet that will be returned,
            //
            params: {
                screen_name: 'stm_Orange',  // Defaut twitter handle
                count: 1,
                exclude_replies: true
            },

            run: function (handle) {      
            return this.twitterWrapper(handle)
            },

            twitterWrapper: function (handle) {
            return new Promise ( (res,rej) => {
                let config = {
                "consumer_key" : process.env.consumer_key, 
                "consumer_secret":  process.env.consumer_secret,
                "access_token" : process.env.access_token,  
                "access_token_secret" : process.env.access_token_secret 
                }
                config = require('./config.json')
                const T = new Twit(config);
                this.params.screen_name = handle;
            
                T.get('/statuses/user_timeline', this.params, (err,data) => {
                var input = data[0].text;
                var alexaResponse = Main.read(input);
                res(alexaResponse)
                });
            })
            }

        };

        /*
          {"color_line":{"name":"color_line","value":"orange","confirmationStatus":"NONE","source":"USER"}}
        */
        const color = slots.color_line.value || "NO_COLOR";

        if (color.includes("lines")) {
            // do all metro lines
        }

        pink_line = [
            "Pink line will be down for sometime...",
            "Coming soon to a city near you.",
            "Pink line is currently being built",
            "No pink line yet, hopefully it's built soon!",
        ]
        if (color == "pink") {
            return handlerInput.responseBuilder
                .speak(pink_line[Math.floor(Math.random() * pink_line.length)])
                .getResponse();
        }


        const metro_json = {
            "orange": "stm_Orange",
            "green": "stm_Verte",
            "yellow": "stm_Jaune",
            "blue": "stm_Bleue",
            "purple": "Haboub72903512`"
        }

        let msg;
        let twitter_handler;

        twitter_handler = metro_json[color];
        if (twitter_handler == undefined) {
            msg = "There is no " + color + " line.";
            return handlerInput.responseBuilder
            .speak(JSON.stringify(msg))
            .getResponse();

        }
        // else msg = "Isaac says hi"
        else { 
            let x = await Main.message(twitter_handler)
            return handlerInput.responseBuilder
            .speak(x)
            .getResponse();
            
        };
    },
};

const HelpHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest'
            && request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak(HELP_MESSAGE)
            .reprompt(HELP_REPROMPT)
            .getResponse();
    },
};

const ExitHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest'
            && (request.intent.name === 'AMAZON.CancelIntent'
                || request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak(STOP_MESSAGE)
            .getResponse();
    },
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

        return handlerInput.responseBuilder.getResponse();
    },
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);

        return handlerInput.responseBuilder
            .speak('Sorry, an error occurred.')
            .reprompt('Which metro line did you want to know the status about?')
            .getResponse();
    },
};


const SKILL_NAME = 'Montreal Go';
const HELP_MESSAGE = 'You can ask for a metro line, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';



const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = 
    skillBuilder
    .addRequestHandlers(
        HelpHandler,
        ExitHandler,
        SessionEndedRequestHandler,
        MetroLineHandler,
        LaunchRequestHandler
    )
    .addErrorHandlers(ErrorHandler)
    .lambda() 
