var fs = require("fs");

//async read
fs.readFile("abc.json",function(err,data){
    if(err) throw err

    console.log(data.toString());
});


//sync read 
datajson = fs.readFileSync("abc.json");
console.log(datajson.toString());