
var metroStops = require('./data/metro.json');

function startTime (stopName){
    var stop = metroStops[stopName]; 
    console.log(stop["start"]);
    return stop["start"] ;
}

function endTime(stopName){
    var stop = metroStops[stopName]; 
    console.log(stop["interval"]);
    return stop["interval"] ;
}





nextPass('guy concordia');