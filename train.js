let Trains = {

    init: function(){
        this.stops = require("./data/train_data/stops.json");
        this.stoptimes = require("./data/train_data/stop_times.json");
        this.trips = require("./data/train_data/trips.json");
        this.routes = require("./data/train_data/routes.json");

        this.loaded = true;
    },


    //
    ask: function(trainline, stop, direction){
        // Default value
        this.arrival_time = "Sorry... Arrival time not found.";

        if(!this.loaded)
            this.init();

        // Finding route_id
        for(var i=0; i<this.routes.length; i++){
            var lineName = this.routes[i]["route_long_name"];
            if(lineName.toLowerCase().includes(trainline.toLowerCase())){
                this.trainline = { "id": this.routes[i]["route_id"], "name":this.routes[i]["route_long_name"] };
            }
        }


        // Find the stop_id's
        this.stop = [];
        for(var i=0; i<this.stops.length; i++){
            var gareName = this.stops[i]["stop_name"];
            if(gareName.toLowerCase().includes(stop.toLowerCase())){
                this.stop.push({
                    "id": this.stops[i]["stop_id"],
                    "name": gareName,
                });
            }
        }


        // Get direction
        for(var i=0; i<this.trips.length; i++){
            var dir = this.trips[i]["trip_headsign"];
            var route_id = this.trips[i]["route_id"];

            if( this.trainline.id === route_id && dir.toLowerCase().includes(direction.toLowerCase())) {
                this.direction = {
                    dir: dir,
                    trip_id: this.trips[i]["trip_id"]
                };
            }
        }


        // Filter
        for(var i=0; i<this.stoptimes.length; i++){
            var stop_id = this.stoptimes[i]["stop_id"];
            var trip_id = this.stoptimes[i]["trip_id"];

            for(var stop in this.stop){
                if(this.stop[stop]["id"] === stop_id && this.direction.trip_id === trip_id){
                    // Check for the arrival time
                    this.arrival_time = this.stoptimes[i]["arrival_time"];
                }
            }
        }

        return this.arrival_time;
    }

};


var res = Trains.ask("Saint-Jérôme", "Vimont", "Montréal");
console.log(res);

