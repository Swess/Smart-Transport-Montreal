var Twit = require('twit');

var config = require("./config.json")
var T = new Twit(config);

// screen_name is the twitter handle of the wanted twitter account
// count is the number of tweet that will be returned,
//
var params = {
    screen_name: 'stm_Orange',
    count: 1,
    exclude_replies: true
};

// /statuses/user_timeline  is an API call that returns the most recent tweet
T.get('/statuses/user_timeline', params, gotData);

function gotData(err, data, response) {
    var input = data[0].text;
    console.log(input)
};

