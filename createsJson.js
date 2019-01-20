var fs = require('fs');
var path = require('path');

// In newer Node.js versions where process is already global this isn't necessary.
var process = require("process");

var folder = "./data/train_data";

// Loop through all the files in the temp directory
fs.readdir(folder, function (err, files) {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }

    files.forEach(function (file, index) {
        // Looping files

        fs.readFile(folder+"/"+file, function(err, f){
            var array = f.toString().split('\n');

            // use the array
            let titles = array[0].split(",");
            var totalContent = [];


            for(var i=1; i<array.length; i++){
                var rowData = array[i].split(",");
                var rowJson = {};

                for(var j=0; j<titles.length; j++){
                    rowJson[titles[j]] = rowData[j];
                }
                totalContent.push(rowJson);
            }

            // Add to file
            fs.writeFile(folder+"/"+file.replace(".txt", "")+".json", JSON.stringify(totalContent), function (err) {
                if (err) throw err;
                console.log(folder+"/"+file.replace(".txt", "")+".json"+' is created successfully.');
            });

        });

    });
});